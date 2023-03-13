import { AxiosResponse } from 'axios';

const isInvalidResponse = (status: number): boolean =>
  status < 200 || status > 299;

export const parseResponseBody = (response: AxiosResponse | undefined) => {
  const status = response?.status || 0;
  const isInvalid = isInvalidResponse(status);
  return {
    hasError: isInvalid,
    error: isInvalid ? response?.data : {},
    data: isInvalid ? {} : response?.data,
    status,
  };
};
