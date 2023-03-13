import { devices } from '../../consts/devices';
import { screenType } from '../screenType';

describe('media query', () => {
  test('mobile', () => {
    window.matchMedia = jest.fn().mockImplementation(
      (media) =>
        media === '(max-width:767px)' && {
          matches: true,
        }
    );
    const resultRules = screenType();
    expect(resultRules).toBe('mobile');
  });
  test('tablet', () => {
    window.matchMedia = jest.fn().mockImplementation(
      (media) =>
        media === `(min-width: 768px) and (max-width: ${devices.desktop})` && {
          matches: true,
        }
    );
    const resultRules = screenType();
    expect(resultRules).toBe('tablet');
  });
  test('desktop', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }));
    const resultRules = screenType();
    expect(resultRules).toBe('desktop');
  });
});
