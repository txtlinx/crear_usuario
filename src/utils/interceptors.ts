import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { cookies } from '../consts/cookies';
import { getCookie, setCookie } from './cookies';
import { closeSession } from './session';

export const onSuccessResponse = (response: AxiosResponse): AxiosResponse => {
  const { data } = response;
  if (data.accessToken)
    setCookie(cookies.sessionCookie, data.accessToken, true);
  if (data.refreshToken)
    setCookie(cookies.refreshToken, data.refreshToken, true);
  return response;
};

export const onFailureResponse = (
  error: AxiosError
): AxiosResponse | undefined => {
  const {
    request: { status },
    response,
  } = error;
  if (status === 401) {
    closeSession();
  }
  return response;
};

export const onSuccessRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.headers.Authorization = `Bearer ${getCookie(cookies.sessionCookie)}`;
  config.headers['X-Refresh-Token'] = getCookie(cookies.refreshToken);
  return config;
};
