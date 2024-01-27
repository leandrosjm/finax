
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
}

interface InputProps {
  id: string;
}

export const deleteUser = async ({
  id,
}: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
  api.delete(`/users/${id}`);
