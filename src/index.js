import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/App';
import history from './services/history';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'typeface-roboto'; // fonts for material-ui

import { BrowserRouter } from 'react-router-dom';
import appStore from './Redux/store';

const rootElement = (
   <Provider store={appStore}>
      <BrowserRouter history={history}>
         <App/>
      </BrowserRouter>
   </Provider>
)

ReactDOM.render(rootElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
