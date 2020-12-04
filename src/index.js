import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Auth0ProviderWithHistory from "./components/auth/auth0-provider-with-history";

import { Provider } from "react-redux";
import { store } from "./components/redux/ReduxDeploy";// redux imported here

import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <Router>
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>
  </Router>
  </Provider>,
  document.getElementById('root')
);
