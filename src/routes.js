import React from "react";
import { Switch, Router, Route } from "react-router-dom";

import history from "./history";
import LandingPage from "./containers/LandingPage";
import AuthContainer from "./containers/Auth/AuthContainer";
import Discover from "./containers/Discover";
import OrderFeedbackContainer from "./containers/OrderFeedback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";
import SettingsContainer from "./containers/Settings";
import OrderFeedbackHistoryContainer from "./containers/OrderFeedbackHistory";
import OrderFeedbackStart from "./containers/OrderFeedbackStart";

export default (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/auth" component={AuthContainer} exact />
        <Route path="/discover" component={Discover} exact />
        <Route path="/feedback" component={OrderFeedbackContainer} exact />
        <Route path="/preferences" component={ListenerPreferencesContainer} exact />
        <Route path="/settings" component={SettingsContainer} exact />
        <Route path="/history" component={OrderFeedbackHistoryContainer} exact />
        <Route path="/start" component={OrderFeedbackStart} exact />
      </Switch>
    </Router>
  );
};
