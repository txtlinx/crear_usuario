import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getCookie, setCookie } from '../cookies';
import {
  onFailureResponse,
  onSuccessRequest,
  onSuccessResponse,
} from '../interceptors';
import { closeSession } from '../session';

jest.mock('../cookies', () => ({
  setCookie: jest.fn(),
  getCookie: jest.fn(),
}));

jest.mock('../session', () => ({
  closeSession: jest.fn(),
}));

const axiosResponse = {
  data: { accessToken: 'test-token', refreshToken: 'test-token' },
  status: 200,
} as AxiosResponse;

const axiosError = {
  request: { status: 401 },
} as AxiosError;

const axiosConfig = {
  headers: {},
} as InternalAxiosRequestConfig;

describe('onSuccessResponse', () => {
  test('should return response and setCookie with new token', () => {
    const response = onSuccessResponse(axiosResponse);
    expect(response).toStrictEqual(axiosResponse);
    expect(setCookie).toBeCalled();
  });

  test('should return response and setCookie is not called', () => {
    const copyAxiosResponse = { ...axiosResponse };
    copyAxiosResponse.data = {};
    const response = onSuccessResponse(copyAxiosResponse);
    expect(response).toStrictEqual(copyAxiosResponse);
    expect(setCookie).not.toBeCalled();
  });
});

describe('onFailureResponse', () => {
  test('should call closeSession when status is 401', () => {
    onFailureResponse(axiosError);
    expect(closeSession).toBeCalled();
  });

  test('should return response because status is 200', () => {
    const copyAxiosError = { ...axiosError };
    axiosError.request.status = 200;
    onFailureResponse(copyAxiosError);
    expect(closeSession).not.toBeCalled();
  });
});

describe('onSuccessRequest', () => {
  beforeEach(() => {
    (getCookie as jest.Mock).mockReturnValue('test-token');
  });
  test('should return config with new headers', () => {
    const response = onSuccessRequest(axiosConfig);
    expect(response.headers.Authorization).toBe('Bearer test-token');
  });
});
