
export interface ICompanyState {
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
  state_id: any;
  city: string;
  phone_number: string;
}

export const initialState = () => {

  const initialCompanyState: ICompanyState = {
    id: '',
    name: '',
    email: '',
    identifier: '',
    is_product: true,
    is_service: true,
    name_fantasy: '',
    address: '',
    address_number: '',
    address_complement: '',
    state_id: '',
    city: '',
    phone_number: '',
  };


  return {
    initialCompanyState,
  };
};
