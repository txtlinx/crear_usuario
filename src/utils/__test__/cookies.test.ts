import { deleteCookie, getCookie, setCookie } from '../cookies';

describe('getCookie', () => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'token=token',
    });
  });

  test('get valid cookie', () => {
    const cookie = getCookie('token');
    expect(cookie).toBe('token');
  });

  test('get empty because cookie dont exists', () => {
    const cookie = getCookie('token-2');
    expect(cookie).toBe('');
  });
});

describe('setCookie', () => {
  beforeEach(() => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'token=token',
    });
  });

  test('set valid cookie with environment', () => {
    process.env.REACT_APP_DOMAIN_NAME = '.itau.com';
    setCookie('token', 'value', true);
    expect(window.document.cookie).toBe(
      'token=value;domain=.itau.com;path=/;max-age=600;'
    );
  });

  test('set valid cookie, with undefined env', () => {
    setCookie('token', 'value', false);
    expect(window.document.cookie).toBe(
      'token=value;domain=;path=/;max-age=600;'
    );
  });

  test('set valid cookie without environment', () => {
    delete process.env.REACT_APP_DOMAIN_NAME;
    setCookie('token', 'value', true);
    expect(window.document.cookie).toBe(
      'token=value;domain=;path=/;max-age=600;'
    );
  });

  describe('deleteCookie', () => {
    test('should delete cookie with undefined env, isGlobal true', () => {
      delete process.env.REACT_APP_DOMAIN_NAME;
      deleteCookie('token', true);
      expect(window.document.cookie).toBe(
        'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=;path=/'
      );
    });

    test('should delete cookie with defined env, isGlobal true', () => {
      process.env.REACT_APP_DOMAIN_NAME = 'localhost';
      deleteCookie('token', true);
      expect(window.document.cookie).toBe(
        'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=localhost;path=/'
      );
    });

    test('should delete cookie, isGlobal false', () => {
      deleteCookie('token', false);
      expect(window.document.cookie).toBe(
        'token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=;path=/'
      );
    });
  });
});
