import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import AuthContainer from "./containers/Auth/AuthContainer";
import SettingsContainer from "./containers/Settings";
import OrderFeedbackContainer from "./containers/OrderFeedback/OrderFeedback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth" component={AuthContainer} exact />
        <Route path="/settings" component={SettingsContainer} exact />
        <Route path="/feedback" component={OrderFeedbackContainer} exact />
        <Route path="/preferences" component={ListenerPreferencesContainer} exact />
      </Switch>
    </BrowserRouter>
  );
};
