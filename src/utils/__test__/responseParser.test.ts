import { AxiosResponse } from 'axios';
import { parseResponseBody } from '../responseParser';

const axiosResponse = {
  data: { token: 'test-token' },
  status: 400,
} as AxiosResponse;

describe('parseResponseBody', () => {
  test('should return response when has error', () => {
    const response = parseResponseBody(axiosResponse);
    expect(response.hasError).toBe(true);
  });

  test('should return response when is success', () => {
    const copyAxiosResponse = { ...axiosResponse };
    copyAxiosResponse.status = 200;
    const response = parseResponseBody(copyAxiosResponse);
    expect(response.hasError).toBe(false);
  });

  test('should return response with error when status is undefined', () => {
    const copyAxiosResponse = { ...axiosResponse };
    Reflect.deleteProperty(copyAxiosResponse, 'status');
    const response = parseResponseBody(copyAxiosResponse);
    expect(response.hasError).toBe(true);
  });
});
