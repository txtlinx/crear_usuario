import { closeSession } from '../session';

describe('closeSession', () => {
  const realLocation = window.location;

  beforeAll(() => {
    Reflect.deleteProperty(window, 'location');
    window.location = { ...realLocation, assign: jest.fn() };
  });

  afterAll(() => {
    window.location = realLocation;
  });

  test('should delete cookie and move when env is defined', () => {
    process.env.REACT_APP_ACCESS_MF_URL = 'localhost.com';
    closeSession();
    expect(window.location.href).toBe('localhost.com');
  });

  test('should delete cookie and move when env is undefined', () => {
    delete process.env.REACT_APP_ACCESS_MF_URL;
    closeSession();
    expect(window.location.href).toBe('');
  });
});
