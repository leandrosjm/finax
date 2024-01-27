import { AxiosResponse } from 'axios';
import api  from '../../finax-api';
import ExpensesEntity from './entity';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  body: {
    total: number;
    rows: ExpensesEntity[];
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
  status?: string;
}

export const getAllExpenses = async ({
  page,
  limit,
  name,
  status, 
}: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  let query = `?page=${page}&limit=${limit}`;

  if (name) query += `&criteria=${name}`;

  if (status) query += `&status=${status}`;


  return api.get(`/expenses${query}`);
};
