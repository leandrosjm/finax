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
import { IPaymentMethodsState, initialState } from './initial-state';
import { PaymentMethodsContainer, CheckIcon } from './style';
import { useUser } from '../../../../hooks/user';
import { MdAttachMoney, MdMoney, MdOutlineSettings, MdStorefront, MdSupervisorAccount } from 'react-icons/md';
import { getAllUsers } from '../../services/domain/users/get-all';
import { createUser } from '../../services/domain/users/create';
import { formatDateUtc } from '../../../../helper/format-date-utc';
import { formatarDinheiro, isEmail } from '../../../../helper/util';
import { updateUser } from '../../services/domain/users/update';
import { IoMdTrash } from 'react-icons/io';
import { deleteUser } from '../../services/domain/users/delete';
import { getAllPaymentMethods } from '../../services/domain/payment-methods/get-all';
import { RiMoneyCnyBoxFill } from 'react-icons/ri';
import SelectRecurence from '../../../../components/finax/SelectRecurence';
import { createPaymentMethods } from '../../services/domain/payment-methods/create'
import { deletePaymentMethods } from '../../services/domain/payment-methods/delete';
import { updatePaymentMethods } from '../../services/domain/payment-methods/update';

interface LoadDataProps {
  status?: string;
  criteria?: string;
  vPage: number;
  add?: boolean;
}

const PaymentMethods: React.FC = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [openNew, setOpenNew] = useState(false);
  const [openConfirmChanges, setOpenConfirmChanges] = useState(false);
  const [mode, setMode] = useState<'new' | 'edit' | 'view' | null>(null);
  const [headersState, setHeadersState] = useState<HeadCell[]>([]);
  const [filteredRowsState, setFilteredRowsState] = useState<any[]>([]);
  const [status, setStatus] = useState<string>('active');
  const [totalResult, setTotalResult] = useState(0);
  const { user } = useUser();
  const [searchState, setSearchState] = useState('');
  const [commentsState, setCommentsState] = useState('');
  const [errorsCode, setErrorsCode] = useState<ErrorsProps | null>(null);
  const [loadState, setLoadState] = useState(false);

  const { initialPaymentMethodsState } = initialState();

  const [PaymentMethodstate, setPaymentMethodstate] = useState<IPaymentMethodsState>(initialPaymentMethodsState);

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
    const { name } = PaymentMethodstate;
    // if(!expense_type_id){
    //   Swal.fire('Atenção!', `Escolha uma opção de despesa`, 'error');
    //   isOk = false;
    // }
    // if(!isEmail(email)){
    //   Swal.fire('Atenção!', `Esse email não é válido`, 'error');
    //   isOk = false;
    // }

    return isOk;
  }

  const handleSave = async () => {
    console.log("vPaymentMethodstate", PaymentMethodstate);
    if(validateForm()){
      createPaymentMethods({...PaymentMethodstate })
      .then(() => {
        Swal.fire('Sucesso!', 'Despesa cadastrada com sucesso!', 'success');
        loadInitialData({ vPage: 1, status: status, criteria: searchState });
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
      updatePaymentMethods({...PaymentMethodstate })
      .then(() => {
        Swal.fire('Sucesso!', 'Despesa atualizada com sucesso!', 'success');
        loadInitialData({ vPage: 1, status: status, criteria: searchState });
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

  const loadInitialData = async ({  status, criteria, vPage, add }: LoadDataProps) => {
    try {
      setLoadState(!add);
      const response = await getAllPaymentMethods({
          page: vPage,
          status: status,
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
        vPage: 1,
      });
    else loadInitialData({  
      status: status,
      criteria: searchState,
      vPage: 1, 
      add: false });
  };

  const handleDelete = (id: string) => {
    Swal.fire({
      title: 'Atenção!',
      text: 'Confirma a exclusão da despesa?',
      icon: 'warning',
      cancelButtonText: 'Não',
      confirmButtonText: 'Confirmo',
      confirmButtonColor: '#E8503E',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deletePaymentMethods({ id }).then((response: { status: number; })=>{
          if (response.status === 200) {
              loadInitialData({ status: status, criteria: searchState, vPage: 1 });
              Swal.fire('Success!', 'Despesa excluida!', 'success');
            }
        }).catch((error: any) => {
             Swal.fire('Error!', `Erro ao tentar o despesa: ${error}`, 'error');
         });
      
      }
    });
  };

  const handleActionIcons = (row: any): JSX.Element => {
    const iconsOptions = [
     {
        icon: <EditOutlined />,
        text: 'Editar',
        onClick: () => handleOpenEdit(row),
      },
      {
            icon: <VisibilityOutlined />,
            text: 'Visualizar',
            onClick: () => handleOpenView(row),
      },
       {
        icon: <IoMdTrash />,
        text: 'Excluir',
        onClick: () => handleDelete(row.id),
      }
    ];

    const filteredIcons = iconsOptions.filter((icon) => icon !== null);

    return <IconMenu options={filteredIcons as OptionProps[]} />;
  };

  const populateModal = async (row: any) => {
    setPaymentMethodstate(row)
  };

  const money = (value: any) => {
    var valor = value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    let _value = valor;
    if(valor === 'NaN') _value = '';

    return _value;
  };

  const handleChangeValues = (id: string) => (event: ChangeEvent<{ value: any; name: string; checked?: boolean }>, newValue: any = '') => {
    
    const clearNumber = (value: string) : any => {
      if(value.replace(/[^0-9]/g, '').length === 0) return '';
      const _value = parseFloat(value.replace(/[^0-9]/g, ''));

      if(_value > 31) return 31;
      if(_value < 1) return '';

      return _value;
    }
    
    setPaymentMethodstate((prevState: any): IPaymentMethodsState => {
      const newState = prevState;
      let value;
      switch (id) {
        case 'status':
          value = event.target.checked ? 'active': 'inactive';
          break;
        case 'recurrence':
          value = newValue?.code;
          break;
        case 'due_date':
          value = clearNumber(event.target.value);
          break;
         case 'value':
           value = money(event.target.value);
         break;
        default:
          value = event.target.value;
          break;
      }

      newState[id] = value;
      return { ...newState } as IPaymentMethodsState;
    });
  };

  const disableCreateButton = (): boolean => {
    if(mode === 'edit') return false;

     const { name } = PaymentMethodstate;
     return !(!!name );
  };

  const resetStates = () => {
    setPaymentMethodstate(initialPaymentMethodsState);
  };

  // const handleCommentsConfirm = () => {
  //   if (commentsState.length > 0) {
  //     handleUpdate();
  //   }
  // };

  const loadMore = () => {
    loadInitialData({
      add: true,
      vPage: pagination.nextPage,
      status: status,
      criteria: searchState,
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
       loadInitialData({ status: status, criteria: searchState,  vPage: 1, add: false });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState, status]);

  if (errorsCode) return <Errors status={errorsCode.status} text={errorsCode.text} />;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.checked? 'active' : 'inactive');
  };

  return (
    <PaymentMethodsContainer>
      <Grid container>
        <Grid item xs={12}>
          <Grid container className="mb-16">
            <Grid item xs={12}>
              <Breadcrumb
                routesBradCrumb={[
                  { title: 'Empresa', url: '/' },
                  {
                    title: 'Formas de pagamento',
                    url: '/company/payment-methods',
                  },
                ]}
              />
            </Grid>
          </Grid>

          <Grid container className="mb-16">
            <Grid item xs={12}>
              <TitlePages section="Empresa" title="Formas de pagamento" showAction open={showFilter} handleOpen={() => setShowFilter(!showFilter)} icon={<MdStorefront size={29}/>} />
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
                        <div className="text">Tipo de Pagamento</div>
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
                      money: formatarDinheiro(parseFloat(row.value)),
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
        icon={<MdAttachMoney />}
        open={openNew} 
        title="Tipo de pagamento"
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
                    label="Tipo de pagamento"
                    variant="filled"
                    placeholder="ex: Pix"
                    disabled={mode === 'view'}
                    value={PaymentMethodstate.name}
                    onChange={handleChangeValues('name')}
                  />
                </Grid>
                {/* <Grid item>
                   <TextField
                    fullWidth
                    name="value"
                    label="Valor"
                    variant="filled"
                    disabled={mode === 'view'}
                    value={PaymentMethodstate.value}
                    onChange={handleChangeValues('value')}
                  /> 
                </Grid>   
                <Grid item>
                  <TextField
                    fullWidth
                    name="due_date"
                    label="Dia do vencimento"
                    variant="filled"
                    disabled={mode === 'view'}
                    value={PaymentMethodstate.due_date}
                    onChange={handleChangeValues('due_date')}
                    inputProps={
                      {
                        maxlength:2
                      }
                    }
                  />
                </Grid>   
                <Grid item>
                  <SelectRecurence
                    name="recurrence"
                    label="Recorrência"
                    disable={mode === 'view'}
                    value={{ code: PaymentMethodstate.recurrence }}
                    handleChange={handleChangeValues('recurrence')}
                    />
                </Grid> */}
                <Grid item className="p-8">
                    <FormControlLabel
                      value="top"
                      control={<Switch disabled={mode === 'view'} color="primary" name='status' onChange={handleChangeValues('status')} checked={PaymentMethodstate.status === 'active'} />}
                      label="Status"
                    />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
       
        </Grid>
      </Modal>
    </PaymentMethodsContainer>
  );
};

export default PaymentMethods;
