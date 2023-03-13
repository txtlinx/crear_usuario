import { alertReducer } from '../alertReducer';

const initialState = {
  display: false,
  text: '',
  id: '',
  onClose: () => undefined,
  type: undefined,
  title: '',
};

describe('alertReducer', () => {
  test('should set with initial state', () => {
    const response = alertReducer(initialState);
    expect(response).toStrictEqual(initialState);
  });
  test('Case alertsOn', () => {
    const response = alertReducer(initialState, {
      type: 'alertsOn',
      payload: { display: true, text: 'text' },
    });
    expect(response.display).toBeTruthy();
  });
});
