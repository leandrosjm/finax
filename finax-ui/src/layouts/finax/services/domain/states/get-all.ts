import { AxiosResponse } from 'axios';
import api  from '../../finax-api';
import StatesEntity from './entity';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  body: StatesEntity[];
}


export const getAllStates = async (): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  return api.get(`/states`);
};
