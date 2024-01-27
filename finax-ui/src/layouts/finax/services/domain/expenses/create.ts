
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
    message: string;
    statusCode: number;
    body: {
      expenses: {
        id: string;
        name: string;
      };
    };
  }
  
  export interface InputProps {
    name: string;
    status: string;
    value: number;
    due_date: number;
    recurrence: string;
  }

  export const createExpenses = async ({
    name,
    status,
    value,
    due_date,
    recurrence
  }: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
    api.post('/expenses', {
      name,
      status,
      value,
      due_date,
      recurrence
    });
  