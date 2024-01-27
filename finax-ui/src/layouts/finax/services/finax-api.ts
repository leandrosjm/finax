import axios, { AxiosRequestConfig } from 'axios';

const finaxApi = axios.create({
  baseURL: `${process.env.REACT_APP_Finax_API}/api/v1`,
});

finaxApi.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    //const token = sessionStorage.getItem('@token-Finaxpro');
    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp7ImlkIjoiNzBkYTAwZjUtNWI3NS00YjIzLTg0ZjEtMjIxZWU3MDI2ODZmIiwibmFtZSI6IkxlYW5kcm8gUGVyZWlyYSIsImlzX2FkbWluIjp0cnVlLCJhY2NvdW50X2lkIjoiNzBkYTAwZjUtNWI3NS00YjIzLTg0ZjEtMjIxZWU3MDI2ODZmIn0sImlhdCI6MTY5MTA2MjE5MSwiZXhwIjoxNjk0NjYyMTkxfQ.hFl2M_gVX1XWaewEjzDHLpY1NhfmtwN0JEsRHjqvMjs' 
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

finaxApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.clear();
      window.location.href = '/error/401';
    }

    return Promise.reject(error);
  }
);

export default finaxApi;
