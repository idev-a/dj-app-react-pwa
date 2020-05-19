import React, { useState, useCallback } from "react";
import { Switch, Router, Route } from "react-router-dom";

import history from "./history";
import LandingPage from "./containers/LandingPage";
import AuthContainer from "./containers/Auth/AuthContainer";
import Discover from "./containers/Discover";
import OrderFeedbackContainer from "./containers/OrderFeedback";
import ProFeedbackContainer from "./containers/ProFeeback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";
import SettingsContainer from "./containers/Settings";
import OrderFeedbackHistoryContainer from "./containers/OrderFeedbackHistory";
import GiveProFeedbackContainer from "./containers/GiveProFeedback";
import FooterNav from "./components/FooterNav";
import SearchContainer from "./containers/Search";
import { getTokenDetails } from "./state/actions/userActions";
import ProfileContainer from "./containers/Profile";
import MenuComponent from "./components/Menu";
import OrderFeedbackStartComponent from "./components/OrderFeedbackStart";
import ForgotPasswordContainer from "./containers/ForgotPassword/ForgotPasswordContainer";
import ResetPasswordContainer from "./containers/ResetPassword/ResetPasswordContainer";
import Onboarding2 from './containers/Onboarding2/OnboardingContainer';

export const MenuHandlerContext = React.createContext();

export default props => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenuClick = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <Router history={history}>
      {showMenu && (
        <MenuComponent handleClickMenuToggle={handleToggleMenuClick} />
      )}
      <MenuHandlerContext.Provider value={handleToggleMenuClick}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/signin" component={AuthContainer} exact />
          <Route
            path="/forgot-password"
            component={ForgotPasswordContainer}
            exact
          />
          <Route
            path="/reset"
            component={ResetPasswordContainer}
            exact
          />
          <Route path="/discover" component={withValidToken(Discover)} exact />
          <Route
            path="/feedback"
            component={withValidToken(OrderFeedbackStartComponent)}
            exact
          />
          <Route
            path="/hit-feedback"
            component={withValidToken(OrderFeedbackContainer)}
            exact
          />
          <Route
            path="/pro-feedback"
            component={withValidToken(ProFeedbackContainer)}
            exact
          />
          <Route
            path="/preferences"
            component={withValidToken(ListenerPreferencesContainer)}
            exact
          />
          <Route
            path="/onboarding-complete"
            component={withValidToken(Onboarding2)}
            exact
          />
          <Route
            path="/settings"
            component={withValidToken(SettingsContainer)}
            exact
          />
          <Route
            path="/history"
            component={withValidToken(OrderFeedbackHistoryContainer)}
            exact
          />
          <Route
            path="/give"
            component={withValidToken(GiveProFeedbackContainer)}
            exact
          />
          <Route
            path="/p/:username"
            component={ProfileContainer}
            exact
          />
          <Route
            path="/search"
            component={withValidToken(SearchContainer)}
            exact
          />
        </Switch>
      </MenuHandlerContext.Provider>
      {/* <FooterNav /> */}
    </Router>
  );
};

const withValidToken = WrappedComponent => {
  return class extends React.Component {
    async componentDidMount() {
      window.scrollTo(0, 0);
      const response = await getTokenDetails();
      if (!response.ok) {
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("isPremiumUser");
        localStorage.removeItem("isFirstUserLogin");
        this.props.history && this.props.history.push("/signin");
      }
    }
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
