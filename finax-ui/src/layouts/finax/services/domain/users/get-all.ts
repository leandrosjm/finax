import { AxiosResponse } from 'axios';
import api  from '../../finax-api';
import UserEntity from './entity';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  body: {
    total: number;
    rows: UserEntity[];
    totalPages: number;
    nextPage: number;
    prevPage: number;
    currentPage: number;
  };
}

interface InputProps {
  page: number;
  limit: number;
  name?: string;
  is_admin?: boolean;
  status?: string;
}

export const getAllUsers = async ({
  page,
  limit,
  name,
  status, 
  is_admin
}: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  let query = `?page=${page}&limit=${limit}`;

  if (name) query += `&criteria=${name}`;

  if (status) query += `&status=${status}`;
   query += `&is_admin=${is_admin}`;


  return api.get(`/users${query}`);
};
