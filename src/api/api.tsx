import axios, { AxiosInstance, AxiosProgressEvent, CancelTokenSource } from 'axios';
import { MoreturnUrl } from '../utils/constants';

const maxRetries = 3;

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: MoreturnUrl,
    headers: {
      'Content-Type': 'multipart/form-data',
      accept: '*/*',
    },
    responseType: 'json',
  });
};

const handleRetry = async (error: any) => {
  const { config } = error;

  config.retries = config.retries || 0;

  if (config.retries < maxRetries) {
    config.retries += 1;
    console.log(`Retry count: ${config.retries}`);
    return instance(config);
  }

  return Promise.reject(error);
};

const setupResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(undefined, handleRetry);
};

const instance = createAxiosInstance();
setupResponseInterceptor(instance);

const cancelTokenSource = (): CancelTokenSource => {
  return axios.CancelToken.source();
};

export { instance, cancelTokenSource };
