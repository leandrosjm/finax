import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AheadProvider } from './hooks/use-config';
 import { UserProvider } from './hooks/user';
import Routes from './layouts/routes';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
     <UserProvider>
         <AheadProvider>
          <Routes />
         </AheadProvider> 
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
