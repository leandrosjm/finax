import { HeadCell } from '../../../../components/finax/TableDefault/TableHeadFinax';

export interface IUserState {
  id: string;
  name: string;
  password: string;
  confirm_password: string;
  email: string;
  is_admin: boolean;
  status: string;
}

export const initialState = (isEmbAdmin = false) => {
  const headers = [
    {
      id: 'name',
      viewCheckbox: false,
      order: true,
      label: 'Nome',
    },
    {
      id: 'email',
      viewCheckbox: false,
      order: true,
      label: 'Email',
    },
    {
       id: 'status',
       viewCheckbox: false,
       order: false,
       label: 'Status',
     },
     {
      id: 'is_admin',
      viewCheckbox: false,
      order: false,
      label: 'Administrador',
     },
     {
      id: 'last_login',
      viewCheckbox: false,
      order: false,
      label: 'Último acesso',
     },
     {
       id: 'actions',
       viewCheckbox: false,
       order: false,
       label: 'Ações',
       width: '1',
     },

  ];

  const initialUsertState: IUserState = {
    id: '',
    name: '',
    email: '',
    is_admin: true,
    status: 'active',
    password: '',
    confirm_password: ''
  };

  const filteredHeaders = headers.filter((header) => header !== null);

  return {
    headers: [...filteredHeaders] as HeadCell[],
    initialUsertState,
  };
};
