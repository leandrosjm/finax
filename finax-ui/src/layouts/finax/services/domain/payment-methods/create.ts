
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
    message: string;
    statusCode: number;
    body: {
      paymentMethods: {
        id: string;
        name: string;
      };
    };
  }
  
  export interface InputProps {
    name: string;
    status: string;
  }

  export const createPaymentMethods = async ({
    name,
    status,
  }: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
    api.post('/payment-methods', {
      name,
      status,
    });
  