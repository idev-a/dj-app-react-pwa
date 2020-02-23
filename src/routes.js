import React, { useState, useCallback } from "react";
import { Switch, Router, Route } from "react-router-dom";

import history from "./history";
import LandingPage from "./containers/LandingPage";
import AuthContainer from "./containers/Auth/AuthContainer";
import Discover from "./containers/Discover";
import OrderFeedbackContainer from "./containers/OrderFeedback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";
import SettingsContainer from "./containers/Settings";
import OrderFeedbackHistoryContainer from "./containers/OrderFeedbackHistory";
import SearchContainer from "./containers/Search";
import FooterNav from "./components/FooterNav";
import { getTokenDetails } from "./state/actions/userActions";
import MenuComponent from "./components/Menu";

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
          <Route path="/discover" component={withValidToken(Discover)} exact />
          <Route
            path="/feedback"
            component={withValidToken(OrderFeedbackContainer)}
            exact
          />
          <Route
            path="/preferences"
            component={withValidToken(ListenerPreferencesContainer)}
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
          <Route path="/search" component={SearchContainer} exact />
        </Switch>
      </MenuHandlerContext.Provider>
      <FooterNav />
    </Router>
  );
};

const withValidToken = WrappedComponent => {
  return class extends React.Component {
    async componentDidMount() {
      const response = await getTokenDetails();
      if (!response.ok) {
        localStorage.removeItem("x-access-token");
        localStorage.removeItem("isPremiumUser");
        localStorage.removeItem("isFirstUserLogin");
        this.props.history && this.props.history.push("/signin");
      }
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
