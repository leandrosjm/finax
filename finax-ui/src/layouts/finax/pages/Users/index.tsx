import { Box, Button, Collapse, FormControlLabel, Grid, Switch, TextField, Tooltip } from '@material-ui/core';
import { EditOutlined, VisibilityOutlined } from '@material-ui/icons';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import Swal from 'sweetalert2';
import Breadcrumb from '../../../../components/finax/Breadcrumb';
import ConfirmChanges from '../../../../components/finax/ConfirmChanges';
import { IconMenu, OptionProps } from '../../../../components/finax/IconMenu';
import LoadingPages from '../../../../components/finax/LoadingPages';
import { LoadMore } from '../../../../components/finax/LoadMore';
import Modal from '../../../../components/finax/Modal';
import Search from '../../../../components/finax/Search';
import TableDefault from '../../../../components/finax/TableDefault';
import { HeadCell } from '../../../../components/finax/TableDefault/TableHeadFinax';
import TitlePages from '../../../../components/finax/TitlePages';
import Errors, { ErrorsProps } from '../../../../components/Errors';
import NoData from  '../../../../components/NoData';

import { IUserState, initialState } from './initial-state';
import { UserContainer, CheckIcon } from './style';
import { useUser } from '../../../../hooks/user';
import { MdOutlineSettings, MdSupervisorAccount } from 'react-icons/md';
import { getAllUsers } from '../../services/domain/users/get-all';
import { createUser } from '../../services/domain/users/create';
import { formatDateUtc } from '../../../../helper/format-date-utc';
import { isEmail } from '../../../../helper/util';
import { updateUser } from '../../services/domain/users/update';
import { IoMdTrash } from 'react-icons/io';
import { deleteUser } from '../../services/domain/users/delete';

interface LoadDataProps {
  status?: string;
  criteria?: string;
  vPage: number;
  is_admin?: boolean;
  add?: boolean;
}

const Users: React.FC = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [openNew, setOpenNew] = useState(false);
  const [openConfirmChanges, setOpenConfirmChanges] = useState(false);
  const [mode, setMode] = useState<'new' | 'edit' | 'view' | null>(null);
  const [headersState, setHeadersState] = useState<HeadCell[]>([]);
  const [filteredRowsState, setFilteredRowsState] = useState<any[]>([]);
  const [status, setStatus] = useState<string>('active');
  const [is_admin, setAdmin] = useState<boolean>(true);
  const [totalResult, setTotalResult] = useState(0);
  const { user } = useUser();
  const [searchState, setSearchState] = useState('');
  const [commentsState, setCommentsState] = useState('');
  const [errorsCode, setErrorsCode] = useState<ErrorsProps | null>(null);
  const [loadState, setLoadState] = useState(false);

  const { initialUsertState } = initialState();

  const [userState, setUserState] = useState<IUserState>(initialUsertState);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    nextPage: 0,
    prevPage: 0,
    totalPages: 0,
  });


  const handleOpenEdit = (row: any) => {
    resetStates();
    setMode('edit');
    setOpenNew(!openNew);
    populateModal(row);
  };

  const handleOpenView = (row: any) => {
    resetStates();
    setMode('view');
    setOpenNew(!openNew);
    populateModal(row);
  };

  const validateForm = () : boolean => {
    let isOk = true;
    const { email, password, confirm_password } = userState;
    if(password !==  confirm_password){
      Swal.fire('Atenção!', `As senhas não estão iguais`, 'error');
      isOk = false;
    }
    if(!isEmail(email)){
      Swal.fire('Atenção!', `Esse email não é válido`, 'error');
      isOk = false;
    }

    return isOk;
  }

  const handleSave = async () => {
    if(validateForm()){
      createUser({...userState})
      .then(() => {
        Swal.fire('Sucesso!', 'Usuário cadastrado com sucesso!', 'success');
        loadInitialData({ vPage: 1, status: status, is_admin: is_admin, criteria: searchState });
        setOpenNew(!openNew);
         resetStates();
      })
      .catch((error: any) => {
        setLoadState(false);
        const { status } = error.response || error.statusCode;
        let message = error.response.data.message;
        if (status === 400) {
          message = error.response.data?.details?.body[0]?.message  
        }
        Swal.fire('Atenção!', `${message}`, 'error');
      });
    }
  };

  const handleUpdate = () => {
    if(validateForm()){
      updateUser({...userState})
      .then(() => {
        Swal.fire('Sucesso!', 'Usuário atualizado com sucesso!', 'success');
        loadInitialData({ vPage: 1, status: status, is_admin: is_admin, criteria: searchState });
       setOpenNew(!openNew);
       resetStates();
      })
      .catch((error: any) => {
        setLoadState(false);
        const { status } = error.response || error.statusCode;
        let message = error.response.data.message;
        if (status === 400) {
          message = error.response.data?.details?.body[0]?.message  
        }
        Swal.fire('Atenção!', `${message}`, 'error');
      });
    }
  };

  const loadInitialData = async ({  status, criteria, is_admin, vPage, add }: LoadDataProps) => {
    try {
      setLoadState(!add);
      const response = await getAllUsers({
          page: vPage,
          status: status,
          is_admin: is_admin,
          name: criteria,
          limit: 10
      });

      const {
         body: { rows, currentPage, nextPage, prevPage, totalPages, total },
       } = response.data;

      const configRows = add ? [...filteredRowsState, ...rows] : rows;
      setPagination({
         currentPage,
         nextPage,
         prevPage,
         totalPages,
       });
      setFilteredRowsState(configRows as any[]);
      setLoadState(false);
      setTotalResult(total);

    } catch (error: any) {
      setLoadState(false);
      const { status } = error.response || error.statusCode;
      let text = '';
      if (status === 401) {
        text = 'You are not allowed access, please contact technical support.';
        setErrorsCode({ status, text });
      } else {
        Swal.fire('Attention!', `Error loading data.<br>ERROR: ${error.message}`, 'error');
      }
    }
  };

  const handleApplyFilter = () => {
    if (searchState.length > 2 )
      loadInitialData({
        status: status,
        criteria: searchState,
        is_admin: is_admin,
        vPage: 1,
      });
    else loadInitialData({  
      status: status,
      criteria: searchState,
      is_admin: is_admin, 
      vPage: 1, 
      add: false });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Atenção!',
      text: 'Confirma a exclusão do usuário?',
      icon: 'warning',
      cancelButtonText: 'Não',
      confirmButtonText: 'Confirmo',
      confirmButtonColor: '#E8503E',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser({ id }).then((response)=>{
          if (response.status === 200) {
              loadInitialData({ status: status, is_admin: is_admin, criteria: searchState, vPage: 1 });
              Swal.fire('Success!', 'Usuário excluido!', 'success');
            }
        }).catch((error: any) => {
             Swal.fire('Error!', `Erro ao tentar o usuário: ${error}`, 'error');
         });
      
      }
    });
  };

  const handleActionIcons = (row: any): JSX.Element => {
    const iconsOptions = [
     userState.is_admin ?  {
        icon: <EditOutlined />,
        text: 'Editar',
        onClick: () => handleOpenEdit(row),
      } : null,
      {
            icon: <VisibilityOutlined />,
            text: 'Visualizar',
            onClick: () => handleOpenView(row),
      },
      userState.is_admin ?  {
        icon: <IoMdTrash />,
        text: 'Excluir',
        onClick: () => handleDelete(row.id),
      } : null
    ];

    const filteredIcons = iconsOptions.filter((icon) => icon !== null);

    return <IconMenu options={filteredIcons as OptionProps[]} />;
  };

  const populateModal = async (row: any) => {
    setUserState(row)
  };

  const handleChangeValues = (id: string) => (event: ChangeEvent<{ value: any; name: string; checked?: boolean }>) => {
    setUserState((prevState: any): IUserState => {
      const newState = prevState;
      const nameProps = event.target.name;
      let value;
      switch (nameProps) {
        case 'is_admin':
          value = event.target.checked;
          break;
        case 'status':
          value = event.target.checked ? 'active': 'inactive';
          break;
        default:
          value = event.target.value;
          break;
      }

      newState[id] = value;
      return { ...newState } as IUserState;
    });
  };

  const disableCreateButton = (): boolean => {
    if(mode === 'edit') return false;
     const { name, email, password, confirm_password } = userState;
     return !(!!name && !!email && !!password && !!confirm_password);
  };

  const resetStates = () => {
    setUserState(initialUsertState);
    setCommentsState('');
  };

  const handleCommentsConfirm = () => {
    if (commentsState.length > 0) {
      handleUpdate();
    }
  };

  const loadMore = () => {
    loadInitialData({
      add: true,
      vPage: pagination.nextPage,
      status: status,
      criteria: searchState,
      is_admin: is_admin
    });
  };

  const handleCancel = () => {
    if (mode !== 'view') {
      Swal.fire({
        icon: 'warning',
        title: 'Attention!',
        text: 'Are you sure you want to exit without saving?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        confirmButtonColor: '#005baf',
      }).then((result) => {
        if (result.isConfirmed) {
          resetStates();
          setOpenNew(!openNew);
        }
      });
    } else {
      resetStates();
      setOpenNew(!openNew);
    }
  };

  useEffect(() => {
    if (user) {
      const { headers } = initialState();
      setHeadersState(headers);
    }
  }, [user]);

  useEffect(() => {
       loadInitialData({ status: status, criteria: searchState, is_admin:is_admin, vPage: 1, add: false });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState, status, is_admin]);

  if (errorsCode) return <Errors status={errorsCode.status} text={errorsCode.text} />;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.checked? 'active' : 'inactive');
  };
  const handleChangeAdm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin(event.target.checked);
  };

  return (
    <UserContainer>
      <Grid container>
        <Grid item xs={12}>
          <Grid container className="mb-16">
            <Grid item xs={12}>
              <Breadcrumb
                routesBradCrumb={[
                  { title: 'Home', url: '/' },
                  {
                    title: 'Usuários',
                    url: '/configurations/users',
                  },
                ]}
              />
            </Grid>
          </Grid>

          <Grid container className="mb-16">
            <Grid item xs={12}>
              <TitlePages section="Configurações" title="Usuários" showAction open={showFilter} handleOpen={() => setShowFilter(!showFilter)} icon={<MdOutlineSettings size={29}/>} />
            </Grid>
          </Grid>

          <Collapse in={showFilter}>
            <Grid container className="mb-16">
              <Grid container alignItems="center" direction="row" spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Search
                    label='Nome'
                    searchValue={searchState}
                    onChange={(event: ChangeEvent<any>) => setSearchState(event.target.value)}
                    margin="0px"
                  />
                </Grid>
                <Grid item xs={4} sm={2} md={2} lg={1}>
                  <FormControlLabel
                    value="top"
                    control={<Switch color="primary" onChange={handleChange} checked={status === 'active'} />}
                    label="Status"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={4} sm={2} md={2} lg={1}>
                  <FormControlLabel
                    value="top"
                    control={<Switch color="primary" onChange={handleChangeAdm} checked={is_admin} />}
                    label="Administrador"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={8} sm={6} md={2}>
                  <Button color="primary" variant="contained" onClick={() => handleApplyFilter()}>
                    Buscar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Collapse>
          <Grid container className="mb-16">
            <Grid item xs={12} className="mb-16">
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={6} sm={8} lg={10} xl={11}>
                  <div className="results">
                    <p>{totalResult} results</p>
                  </div>
                </Grid>
                  <Grid item xs={6} sm={4} lg={2} xl={1}>
                    <Box justifyContent="flex-end" display="flex" className="btn-action-new-filter">
                      <button
                        type="button"
                        onClick={() => {
                          resetStates();
                          setMode('new');
                          setOpenNew(!openNew);
                        }}
                      >
                        <div className="icon">
                          <FiPlus />
                        </div>
                        <div className="text">Novo Usuário</div>
                      </button>
                    </Box>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>

          {loadState ? (
            <LoadingPages />
          ) : (
            <Grid container>
              <Grid item xs={12}>
                {filteredRowsState.length > 0 ? (
                  <TableDefault
                    rows={filteredRowsState.map((row: any) => ({
                      ...row,
                      last_login: row.last_login ? formatDateUtc(row.last_login, true) : '',
                       status: row.status === 'active' && (
                         <Tooltip title="Ativo">
                           <CheckIcon />
                         </Tooltip>
                       ),
                       is_admin: row.is_admin && <CheckIcon />,
                       actions: () => handleActionIcons(row),
                    }))}
                    headers={headersState}
                    setRows={setFilteredRowsState}
                  />
                ) : (
                  <NoData />
                )}
                {pagination.nextPage > 0 ? <LoadMore text="" loadMore={loadMore} /> : null}
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      <Modal
        icon={<MdSupervisorAccount />}
        open={openNew} 
        title="Novo Usuário"
        maxWidth="sm"
        showActions
        handleClose={handleCancel}
        buttonSave={{
          color: 'primary',
          title: 'Save',
          variant: 'contained',
          onClick: mode === 'edit' ? handleUpdate : handleSave,
          disable: disableCreateButton() || mode === 'view',
        }}
        buttonCancel={{
          color: 'inherit',
          title: 'Cancel',
          variant: 'contained',
          onClick: () => handleCancel(),
        }}
      >
        <Grid item xs={12}>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12}>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <TextField
                    fullWidth
                    name="name"
                    label="Nome *"
                    variant="filled"
                    disabled={mode === 'view'}
                    value={userState.name}
                    onChange={handleChangeValues('name')}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    variant="filled"
                    disabled={mode === 'view'}
                    value={userState.email}
                    onChange={handleChangeValues('email')}
                  />
                </Grid>   
                <Grid item>
                  <TextField
                    fullWidth
                    name="password"
                    label="Senha"
                    variant="filled"
                    disabled={mode === 'view'}
                    type='password'
                    value={userState.password}
                    onChange={handleChangeValues('password')}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name="confirm_password"
                    label="Confimar senha"
                    variant="filled"
                    disabled={mode === 'view'}
                    type='password'
                    value={userState.confirm_password}
                    onChange={handleChangeValues('confirm_password')}
                  />
                </Grid>
                <Grid item className="p-8">
                  <FormControlLabel
                      value="top"
                      control={<Switch disabled={mode === 'view'} color="primary" name='is_admin' onChange={handleChangeValues('is_admin')} checked={userState.is_admin} />}
                      label="Administrador"
                    />
                    <FormControlLabel
                      value="top"
                      control={<Switch disabled={mode === 'view'} color="primary" name='status' onChange={handleChangeValues('status')} checked={userState.status === 'active'} />}
                      label="Status"
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
       
        </Grid>
      </Modal>

      <ConfirmChanges
        title="Confirm the change of Operator?"
        open={openConfirmChanges}
        alertMessage="This action will delete all."
        outlined
        value={commentsState}
        handleClose={() => setOpenConfirmChanges(!openConfirmChanges)}
        handleChange={(event: ChangeEvent<any>) => setCommentsState(event.target.value)}
        handleConfirm={() => handleCommentsConfirm()}
        disabled={!commentsState.length}
      />
    </UserContainer>
  );
};

export default Users;
