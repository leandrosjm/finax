import { AxiosResponse } from 'axios';
import api from '../../finax-api';

const authService = {
  getAuthenticate: async (token: string, type = 'auth'): Promise<AxiosResponse<any>> =>
    api.post(`/${type}/userinfo`, { token }),
};

export default authService;
