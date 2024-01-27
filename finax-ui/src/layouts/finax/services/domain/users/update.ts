
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
    message: string;
    statusCode: number;
    body: {
      user: {
        id: string;
        name: string;
        email: string;
        is_admin: string;
        status: string;
      };
    };
  }
  
  export interface InputProps {
    id: string;
    name: string;
    email: string;
    status: string;
    password: string;
    is_admin: boolean;
  }

  export const updateUser = async ({
    id, email, is_admin, name, password, status
  }: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
    api.put(`/users/${id}`, {
        email, is_admin, name, password, status
    });
  