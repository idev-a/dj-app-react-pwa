import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./styles/styles.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
serviceWorker.register();
