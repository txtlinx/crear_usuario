import { screenType } from '../../../../../utils/screenType';
import { definedScreen } from '../helpers';

jest.mock('../../../../../utils/screenType');

describe('helpers SwitchBtn', () => {
  test('Mock function definedScreen for Tablet is open', () => {
    (screenType as jest.Mock).mockReturnValue('tablet');
    const result = definedScreen(true);
    expect(result).toBe('270deg');
  });
  test('Mock function definedScreen for Tablet is close', () => {
    (screenType as jest.Mock).mockReturnValue('tablet');
    const result = definedScreen(false);
    expect(result).toBe('90deg');
  });
  test('Mock function definedScreen for Desktop is open', () => {
    (screenType as jest.Mock).mockReturnValue('desktop');
    const result = definedScreen(true);
    expect(result).toBe('90deg');
  });

  test('Mock function definedScreen is undefined', () => {
    (screenType as jest.Mock).mockReturnValue('mobile');
    const result = definedScreen(true);
    expect(result).toBeUndefined();
  });
});
