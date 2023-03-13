import axios from 'axios';
import {
  onFailureResponse,
  onSuccessRequest,
  onSuccessResponse,
} from '../utils/interceptors';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BFF_BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(onSuccessRequest);

axiosClient.interceptors.response.use(onSuccessResponse, onFailureResponse);

export default axiosClient;
