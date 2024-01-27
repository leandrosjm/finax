import { AxiosResponse } from 'axios';
import api  from '../../finax-api';

interface ResponseBodyAxiosProps {
  message: string;
  statusCode: number;
  body: {
    status: string;
    nome: string;
    fantasia: string;
    logradouro: string;
    numero: string;
    complemento: string;
    municipio: string;
    bairro: string;
    uf: string;
    cep: string;
    email: string;
    telefone: string;
    cnpj: string;
  };
}


export const getInfoCompany = async (cnpj:string): Promise<AxiosResponse<ResponseBodyAxiosProps>> => {
  cnpj = cnpj.replace(/[^\d]/g, "");
  return api.get(`/companies/info-company-by-cnpj/${cnpj}`);
};
