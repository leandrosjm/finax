/* eslint-disable no-console */
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_Finax_API}/api`,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = sessionStorage.getItem('@token-Finaxpro');
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response && error.response.status && error.response.status === 401) {
      sessionStorage.clear();
      window.location.href = '/error/401';
    }

    return Promise.reject(error);
  }
);

export { api };
