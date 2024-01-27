import { Switch } from 'react-router-dom';

import MenuLeft from '../../../components/finax/MenuLeft';
import GlobalStyle from '../GlobalStyle';

import Container from '../../../components/finax/Container';
import Header from '../../../components/finax/Header';
import Loading from '../../../components/Loading';
import RouteValidate from '../../../components/RouteValidate';
import Login from './Login';
import Users from './Users';
import Companies from './Companies';
import Expenses from './Expenses';
import PaymentMethods from './PaymentMethods';

export default function finaxUi() {
  
  return (
    <>
      <GlobalStyle />
      <MenuLeft />
      <Container>
        <Header />
        <div className="body-pages">
          <Switch>
          {/* <RouteValidate path="/" exact component={Login} isPrivate /> */}
          <RouteValidate path="/configuration/users" exact component={Users} isPrivate />
          <RouteValidate path="/company" exact component={Companies} isPrivate />
          <RouteValidate path="/company/expenses" exact component={Expenses} isPrivate />
          <RouteValidate path="/company/payment-methods" exact component={PaymentMethods} isPrivate />
          </Switch>
        </div>
      </Container>
      <Loading />
    </>
  );
}
