import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import LandingPageContainer from "./containers/LandingPage/LandingPage";
import cx from 'classnames';
import './style.scss';
const App = () => {
  return (
    <div className={cx("mainContainer")}>
      <LandingPageContainer />
    </div>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.resetCache();
serviceWorker.register();
