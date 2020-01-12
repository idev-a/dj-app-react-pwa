import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./containers/LandingPage";
import AuthContainer from "./containers/Auth/AuthContainer";
import Discover from "./containers/Discover";
import OrderFeedbackContainer from "./containers/OrderFeedback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";
import SettingsContainer from "./containers/Settings";

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth" component={AuthContainer} exact />
        <Route path="/discover" component={Discover} exact />
        <Route path="/feedback" component={OrderFeedbackContainer} exact />
        <Route path="/preferences" component={ListenerPreferencesContainer} exact />
        <Route path="/settings" component={SettingsContainer} exact />
      </Switch>
    </BrowserRouter>
  );
};
