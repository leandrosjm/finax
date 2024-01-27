
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
}

interface InputProps {
  id: string;
}

export const deletePaymentMethods = async ({
  id,
}: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
  api.delete(`/payment-methods/${id}`);
