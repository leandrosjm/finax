import { HeadCell } from '../../../../components/finax/TableDefault/TableHeadFinax';

export interface IExpensesState {
  id: string;
  name: string;
  status: string;
  value: string;
  due_date: number
  recurrence: string;
}


export const initialState = (isEmbAdmin = false) => {
  const headers = [
    {
      id: 'name',
      viewCheckbox: false,
      order: true,
      label: 'Tipo de despesa',
    },
    {
       id: 'status',
       viewCheckbox: false,
       order: false,
       label: 'Status',
     },
     {
      id: 'money',
      viewCheckbox: false,
      order: false,
      label: 'Valor',
     },
     {
      id: 'due_date',
      viewCheckbox: false,
      order: false,
      label: 'Dia do vencimento',
     },
     {
      id: 'recurrence',
      viewCheckbox: false,
      order: false,
      label: 'Recorrência',
     },
     {
       id: 'actions',
       viewCheckbox: false,
       order: false,
       label: 'Ações',
       width: '1',
     },

  ];

  const initialExpensetState: IExpensesState = {
    id: '',
    name: '',
    status: 'active',
    value: '',
    due_date: 5,
    recurrence: 'Mensal',
  };

  const filteredHeaders = headers.filter((header) => header !== null);

  return {
    headers: [...filteredHeaders] as HeadCell[],
    initialExpensetState,
  };
};
