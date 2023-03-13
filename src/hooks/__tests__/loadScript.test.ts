import { renderHook } from '@testing-library/react';
import LoadScript from '../loadScript';

test('loadScript tests', () => {
  const mockLogger = jest.spyOn(document, 'createElement');
  const url = 'https://test-script.com';
  renderHook(() => LoadScript(url));
  expect(mockLogger).toBeCalled();
});
