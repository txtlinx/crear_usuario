import { thousandsFormat } from '../thousandsFormat';

describe('thousandsFormat', () => {
  test('If I give you a number in thousands, you must return it to me formatted in thousands', () => {
    const num = thousandsFormat(10000);
    expect(num).toBe('10.000');
  });
  test('If I give it a string in thousands, it must return it to me in fromateado in thousands', () => {
    const num = thousandsFormat('10000');
    expect(num).toBe('10.000');
  });

  test('if I pass a string in thousands and as the second parameter  2 should be returned to me formatted in thousands with two decimal places', () => {
    const num = thousandsFormat('10000', 2);
    expect(num).toBe('10.000,00');
  });

  test('If I pass a number in thousands with several decimal places and as the second parameter  2 should be returned to me formatted in thousands with two decimal places', () => {
    const num = thousandsFormat(10000.2312312, 2);
    expect(num).toBe('10.000,23');
  });
});
