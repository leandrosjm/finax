import { Box, Button, Collapse, FormControlLabel, Grid, Switch, TextField, Tooltip } from '@material-ui/core';
import { EditOutlined, VisibilityOutlined } from '@material-ui/icons';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Breadcrumb from '../../../../components/finax/Breadcrumb';
import LoadingPages from '../../../../components/finax/LoadingPages';
import TitlePages from '../../../../components/finax/TitlePages';
import Errors, { ErrorsProps } from '../../../../components/Errors';
import { ICompanyState, initialState } from './initial-state';
import { CompanyContainer } from './style';
import { useUser } from '../../../../hooks/user';
import {isCNPJ, isEmail} from '../../../../helper/util';
import { getMyCompany } from '../../services/domain/companies/get-my-company';
import SelectStates from '../../../../components/finax/SelectStates';
import { MdStore, MdStorefront } from 'react-icons/md';
import { updateCompay } from '../../services/domain/companies/update';
import { createCompany } from '../../services/domain/companies/create';
import { getInfoCompany } from '../../services/domain/companies/get-info-company';


const Companies: React.FC = () => {
  const [showFilter, setShowFilter] = useState(true);
  const { user } = useUser();
  const [errorsCode, setErrorsCode] = useState<ErrorsProps | null>(null);
  const [loadState, setLoadState] = useState(false);

  const { initialCompanyState } = initialState();

  const [formState, setFormState] = useState<ICompanyState>(initialCompanyState);


  const validateForm = () : boolean => {
    let isOk = true;
    const { email, identifier } = formState;
    if(!isCNPJ(identifier)){
      Swal.fire('Atenção!', `O CNPJ está incorreto`, 'error');
      isOk = false;
    }
    if(!isEmail(email)){
      Swal.fire('Atenção!', `Esse email não é válido`, 'error');
      isOk = false;
    }

    return isOk;
  }

  const handleSave = async () => {

    createCompany({...formState})
      .then((response) => {
        Swal.fire('Sucesso!', 'Empresa cadastrada com sucesso!', 'success');
        console.log("response", response)
        setFormState({...formState, id: response.data.body.id});
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

    if(validateForm()){
      // createUser({...userState})
      // .then(() => {
      //   Swal.fire('Sucesso!', 'Empresa cadastrada com sucesso!', 'success');
      // })
      // .catch((error: any) => {
      //   setLoadState(false);
      //   const { status } = error.response || error.statusCode;
      //   let message = error.response.data.message;
      //   if (status === 400) {
      //     message = error.response.data?.details?.body[0]?.message  
      //   }
      //   Swal.fire('Atenção!', `${message}`, 'error');
      // });
    }
  };

  const handleUpdate = () => {
    if(validateForm()){
      updateCompay({...formState})
      .then(() => {
        Swal.fire('Sucesso!', 'Empresa atualizada com sucesso!', 'success');
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
  };
 }

  const loadInitialData = async () => {
    try {

      setLoadState(true);
      const response = await getMyCompany();
      const {
         body,
       } = response.data;

      setFormState({
        ...body
      } as unknown as ICompanyState);

      setLoadState(false);

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

  function formatCNPJ(cnpj: string): string {
    // Remover caracteres não numéricos do CNPJ
    cnpj = cnpj.replace(/[^\d]/g, "");
  
    // Aplicar a máscara do CNPJ (99.999.999/9999-99)
    return cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }


  const handleChangeValues = (id: string) => (event: ChangeEvent<{ value: any; name: string; checked?: boolean }>, newValue: any = '') => {

    setFormState((prevState: any): ICompanyState => {
      const newState = prevState;
      let value;
      switch (id) {
        case 'is_product':
        case 'is_service':
          value = event.target.checked;
          break;
        case 'state_id':
          value = newValue.code;
          break;
        case 'identifier':
          value = formatCNPJ(event.target.value)
          break;
        default:
          value = event.target.value;
          break;
      }

      newState[id] = value;

      return { ...newState } as ICompanyState;
    });

  }

  const handleSaveOrUpdate = () => {
    if(formState.id) handleUpdate();
    else handleSave();
  }



  useEffect(() => {
       loadInitialData();
  }, []);

  if (errorsCode) return <Errors status={errorsCode.status} text={errorsCode.text} />;


  return (
    <CompanyContainer>
      <Grid container>
        <Grid item xs={12}>
          <Grid container className="mb-16">
            <Grid item xs={12}>
              <Breadcrumb
                routesBradCrumb={[
                  { title: 'Empresa', url: '/company' },
                  {
                    title: 'Registro',
                    url: '/company',
                  },
                ]}
              />
            </Grid>
          </Grid>

          <Grid container className="mb-16">
            <Grid item xs={12}>
              <TitlePages section="Empresa" title="Registro" icon={<MdStorefront size={29}/>} />
            </Grid>
          </Grid>

          { loadState ? (
            <LoadingPages />
          )
          : (
            <Grid container className="mb-16">
              <Grid container alignItems="center" direction="row" spacing={2} lg={10}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                      label='Razão Social'
                      variant="filled"
                      value={formState.name}
                      name="name"
                      onChange={handleChangeValues('name')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                      label='CNPJ'
                      variant="filled"
                      value={formState.identifier}
                      name="identifier"
                      onChange={handleChangeValues('identifier')}
                      inputProps={{ maxLength: 14 }}
                      
                    />
                </Grid>
                <Grid item xs={4} sm={2} md={2} lg={1}>
                  <FormControlLabel
                    value={formState.is_product}
                    control={<Switch color="primary" name="is_product" onChange={handleChangeValues('is_product')} checked={formState.is_product} />}
                    label="Produto"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={4} sm={4} md={2} lg={1}>
                  <FormControlLabel
                    value={formState.is_service}
                    control={<Switch color="primary" name="is_service" onChange={handleChangeValues('is_service')} checked={formState.is_service} />}
                    label="Serviço"
                    labelPlacement="top"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                      label='Nome Fantasia'
                      variant="filled"
                      value={formState.name_fantasy}
                      name="name_fantasy"
                      onChange={handleChangeValues('name_fantasy')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                      label='Endereço'
                      variant="filled"
                      value={formState.address}
                      onChange={handleChangeValues('address')}
                      name="address"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <TextField
                      label='Número'
                      variant="filled"
                      value={formState.address_number}
                      onChange={handleChangeValues('address_number')}
                      name="address_number"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                      label='Complemeto'
                      variant="filled"
                      value={formState.address_complement}
                      name="address_complement"
                      onChange={handleChangeValues('address_complement')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <SelectStates name="state_id" handleChange={handleChangeValues('state_id')} value={{code: formState.state_id }} />

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                      label='Bairro'
                      variant="filled"
                      value={formState.city}
                      name="city"
                      onChange={handleChangeValues('city')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                      label='Telefone'
                      variant="filled"
                      value={formState.phone_number}
                      name="phone_number"
                      onChange={handleChangeValues('phone_number')}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                      label='Email'
                      variant="filled"
                      value={formState.email}
                      name="email"
                      onChange={handleChangeValues('email')}
                    />
                </Grid>
               
                {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                  <h2>Endereço</h2>
                  <div className="divisor" />
                </Grid> */}
              
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button color="primary" variant="contained" onClick={() => handleSaveOrUpdate()}>
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            )  
          }
        </Grid>
      </Grid>


    </CompanyContainer>
  );
};


export default Companies;
