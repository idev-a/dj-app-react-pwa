import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
// if (isIos() && !isInStandaloneMode()) {
//   alert('Add to homescreen to get better experience')
// }

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

const jsx = (
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.register();
