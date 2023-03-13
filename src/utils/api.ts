import { AxiosHeaders } from 'axios';
import axiosClient from '../config/axios';

export type RequestConfigType = {
  url: string;
  params?: Object;
  headers?: AxiosHeaders;
  data?: Object;
};

export const getFromApi = async (config: RequestConfigType) =>
  axiosClient({
    method: 'GET',
    ...config,
  });

export const postFromApi = async (config: RequestConfigType) =>
  axiosClient({
    method: 'POST',
    ...config,
  });

export const deleteFromApi = async (config: RequestConfigType) =>
  axiosClient({
    method: 'DELETE',
    ...config,
  });

export const patchFromApi = async (config: RequestConfigType) =>
  axiosClient({
    method: 'PATCH',
    ...config,
  });

export const putFromApi = async (config: RequestConfigType) =>
  axiosClient({
    method: 'PUT',
    ...config,
  });
