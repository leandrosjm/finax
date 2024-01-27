
import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
    message: string;
    statusCode: number;
    body: {
      company: {
        id: string;
        name: string;
        email: string;
      };
    };
  }
  
  export interface InputProps {
    id: string;
    name: string;
    identifier: string;
    is_product: boolean;
    is_service: boolean;
    name_fantasy: string;
    address: string;
    address_number: string;
    address_complement: string;
    email: string;
    state_id: string;
    city: string;
    phone_number: string;
  }

  export const updateCompay = async ({
    id,
    name,
    identifier,
    is_product,
    is_service,
    name_fantasy,
    address,
    address_number,
    address_complement,
    email,
    state_id,
    city,
    phone_number,
  }: InputProps): Promise<AxiosResponse<ResponseBodyAxiosProps>> =>
    api.put(`/companies/${id}`, {
      name,
      identifier,
      is_product,
      is_service,
      name_fantasy,
      address,
      address_number,
      address_complement,
      email,
      state_id,
      city,
      phone_number,
    });
  