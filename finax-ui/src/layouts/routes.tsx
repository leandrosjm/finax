//import { Route, Switch } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'

import RouteValidate from '../components/RouteValidate';

import PageNotFound from '../components/404';
import FinaxUi from './finax/pages';
// import AuthenticateOauth from './Finax/pages/AuthenticateOauth';
// import AuthenticateSaml from './Finax/pages/AuthenticateSaml';
import Login from './finax/pages/Login';
// import { PageError401 } from './errors/401';
// import ExpandedUi from './expanded';

export default function Routes() {
  return (
    <Switch>
      {/* <Route path="/" component={Login} /> */}
      {/* <Route path="/saml/authenticate" component={AuthenticateSaml} />
      <Route path="/oauth/authenticate" component={AuthenticateOauth} />
      
      <Route path="/error/401" component={PageError401} />
      <Route path="/error/500" component={() => <h1>Error 500</h1>} /> */}

      <RouteValidate path="/*" exact component={FinaxUi} isPrivate/>
      {/* //<RouteValidate path="/expanded" component={ExpandedUi} isPrivate />

      <RouteValidate path="/*" exact component={FinaxUi} isPrivate /> */}

      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
