import axios, { AxiosInstance, AxiosProgressEvent, CancelTokenSource } from 'axios';
import { MoreturnUrl } from '../utils/constants';

const maxRetries = 3;

const instance: AxiosInstance = axios.create({
  baseURL: MoreturnUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    accept: '*/*',
  },
  responseType: 'json',
  onUploadProgress: (progressEvent: AxiosProgressEvent) => {
    console.log('onUploadProgress 호출됨');
    console.log('progressEvent:', progressEvent);
    const { loaded, total } = progressEvent;
    if (total) {
      const progress = Math.round((loaded * 100) / total);
      console.log(`Upload progress: ${progress}%`);
    }
  },
  onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
    console.log('onDownloadProgress 호출됨');
    console.log('progressEvent:', progressEvent);
    const { loaded, total } = progressEvent;
    if (total) {
      const progress = Math.round((loaded * 100) / total);
      console.log(`Download progress: ${progress}%`);
    }
  },
});

const handleRetry = async (error: any) => {
  const { config } = error;

  config.retries = config.retries || 0;

  if (config.retries < maxRetries) {
    config.retries += 1;
    console.log(`재시도 횟수: ${config.retries}`);
    return instance(config);
  }

  return Promise.reject(error);
};

const createCancelableRequest = (): CancelTokenSource => {
  return axios.CancelToken.source();
};

instance.interceptors.response.use(undefined, handleRetry);

export { instance, createCancelableRequest };
