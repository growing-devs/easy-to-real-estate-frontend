import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { MoreturnUrl } from './constants';

let loadingCounter = 0;

const setLoading = (isLoading: boolean): void => {
  if (isLoading) {
    loadingCounter += 1;
  } else {
    loadingCounter = Math.max(0, loadingCounter - 1);
  }
  console.log(`Loading Counter: ${loadingCounter}`);
  // 로딩 인디케이터를 업데이트하는 코드를 여기에 작성하세요.
  // 예를 들어, loadingCounter가 0보다 크면 로딩 인디케이터를 표시하고, 아니면 숨깁니다.
};

const requestInterceptor = (config: AxiosRequestConfig): InternalAxiosRequestConfig => {
  setLoading(true);
  return config as InternalAxiosRequestConfig;
};

const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  setLoading(false);
  return response;
};

const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  setLoading(false);
  return Promise.reject(error);
};

const instance: AxiosInstance = axios.create({
  baseURL: MoreturnUrl,
  headers: {
    'Content-Type': 'multipart/form-data',
    accept: '*/*',
  },
  responseType: 'json',
});

instance.interceptors.request.use(requestInterceptor);
instance.interceptors.response.use(responseInterceptor, errorInterceptor);

export { instance };
