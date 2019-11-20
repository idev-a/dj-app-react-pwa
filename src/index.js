import React, { useState } from "react";
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
import AddToHomeScreen from "./components/AddToHomeScreen";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};
// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone;

// Checks if should display install popup notification:
const showIOSNotification = isIos() && !isInStandaloneMode();
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
const App = () => {
  const [showAddToScreenIOSOverlay, setShowAddToScreenIOSOverlay] = useState(showIOSNotification);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="mainWrapper">
          <AppRouter />
          {showAddToScreenIOSOverlay && <AddToHomeScreen closeClick={() => setShowAddToScreenIOSOverlay(false)}/>}
        </div>
      </Provider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
