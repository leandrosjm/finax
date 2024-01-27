import { AxiosResponse } from 'axios';
import api from '../../finax-api';

interface InputProps {
  criteria?: string;
  status?: string;
}
const userService = {
  getAll: async ({criteria, status}: InputProps): Promise<AxiosResponse<any>> =>
    api.get(`/users`),
};

export default userService;