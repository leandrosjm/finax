import { AxiosResponse } from 'axios';
import api  from '../../finax-api';
import CompanyEntity from './entity';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  body: {
    state_id: any;
    company: CompanyEntity;
  };
}


export const getMyCompany = async (): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  return api.get(`/companies/my-company`);
};
