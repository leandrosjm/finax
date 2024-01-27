
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
    id: string;
    name: string;
    status: string;
  }

  export const updatePaymentMethods = async ({
    id,
    name,
    status,
  }: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
    api.put(`/payment-methods/${id}`, {
      name,
      status,
    });
  