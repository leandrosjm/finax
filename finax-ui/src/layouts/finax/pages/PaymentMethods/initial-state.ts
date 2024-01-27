import { HeadCell } from '../../../../components/finax/TableDefault/TableHeadFinax';

export interface IPaymentMethodsState {
  id: string;
  name: string;
  status: string;
  created_by?: string;
}


export const initialState = (isEmbAdmin = false) => {
  const headers = [
    {
      id: 'name',
      viewCheckbox: false,
      order: true,
      label: 'Tipo de pagmento',
    },
    {
       id: 'status',
       viewCheckbox: false,
       order: false,
       label: 'Status',
     },
     {
      id: 'created_by',
      viewCheckbox: false,
      order: false,
      label: 'Criado por',
     },
     {
       id: 'actions',
       viewCheckbox: false,
       order: false,
       label: 'Ações',
       width: '1',
     },

  ];

  const initialPaymentMethodsState: IPaymentMethodsState = {
    id: '',
    name: '',
    status: 'active',
  };

  const filteredHeaders = headers.filter((header) => header !== null);

  return {
    headers: [...filteredHeaders] as HeadCell[],
    initialPaymentMethodsState,
  };
};
