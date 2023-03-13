import { screenType } from '../../../../utils/screenType';
import { hideMenu } from '../styles';

jest.mock('../../../../utils/screenType', () => ({
  screenType: jest.fn(),
}));

describe('hideMenu()', () => {
  test('return correct values when is mobile', () => {
    (screenType as jest.Mock).mockImplementation(() => 'mobile');
    const result = hideMenu(true);
    expect(result.opacity).toBe(0);
    expect(result.transitionEnd.display).toBe('none');
  });
});
