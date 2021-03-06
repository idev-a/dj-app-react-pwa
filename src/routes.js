import React, { useState, useCallback } from "react";
import { Switch, Router, Route } from "react-router-dom";

import history from "./history";
import SplashScreenContainer from './containers/SplashScreen/SplashScreenContainer'
import LoginScreenContainer from './containers/LoginScreen/LoginScreenContainer'
import SignUpScreenContainer from './containers/SignUpScreen/SignUpScreenContainer'
import EmailSignupContainer from './containers/EmailSignupContainer/EmailSignupContainer'
import EmailSignInContainer from './containers/EmailSignIn/EmailSignInContainer'
import EmailResetPasswordContainer from './containers/EmailResetPassword/EmailResetPasswordContainer'
import PhoneSignupContainer from './containers/PhoneSignup/PhoneSignupContainer'
import PhoneSigninContainer from './containers/PhoneSignin/PhoneSigninContainer'
import VerifySigninContainer from './containers/VerifySignin/VerifySigninContainer'
import VerifyPhoneContainer from './containers/VerifyPhone/VerifyPhoneContainer'
import NewPasswordContainer from './containers/NewPassword/NewPasswordContainer'
import OrderFeedbackContainer from "./containers/OrderFeedback";
import ProFeedbackContainer from "./containers/ProFeeback";
import ListenerPreferencesContainer from "./containers/ListenerPreferences";
import SettingsContainer from "./containers/Settings";
import OrderFeedbackHistoryContainer from "./containers/OrderFeedbackHistory";
import Footer from "./components/Footer";
import SearchContainer from "./containers/Search";
import { getTokenDetails } from "./state/actions/userActions";
import ProfileContainer from "./containers/Profile";
import MenuComponent from "./components/Menu";
import OrderFeedbackStartComponent from "./components/OrderFeedbackStart";
import Leaderboard1 from './containers/Leaderboard1/LeaderboardContainer';
import Onboarding2 from './containers/OnBoarding2/OnboardingContainer';
import Onboarding1 from "./containers/Onboarding1/OnboardingContainer";
import WelcomeContainer from './containers/Welcome/WelcomeContainer';
import ProfileSettingsContainer from './containers/ProfileSettings/ProfileSettingsContainer';
import HomeContainer from './containers/Home/HomeContainer';
import ResultContainer from './containers/Result/ResultContainer';
import UpgradeToPro from './containers/UpgradeToPro/UpgradeToProContainer';
import LeaderboardHomeContainer from './containers/LeaderoardHome/LeaderoardHomeContainner';
import UploadContainer from './containers/Upload/UploadContainer';
import PlayContainer from './containers/Play/PlayContainer';
import DiscoverMusic from './containers/DiscoverMusic/DiscoverMusic';
import ProfileContainerNew from './containers/ProfileContainerNew/ProfileContainerNew';

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
          <Route path="/" component={DiscoverMusic} exact />
          <Route path="/splash" component={SplashScreenContainer} exact />
          <Route path="/loginScreen" component={LoginScreenContainer} exact />
          <Route path="/signupScreen" component={SignUpScreenContainer} exact />
          <Route path="/emailSignup" component={EmailSignupContainer} exact />
          <Route path="/emailSignIn" component={EmailSignInContainer} exact />
          <Route path="/emailReset" component={EmailResetPasswordContainer} exact />
          <Route path="/changePassword" component={NewPasswordContainer} exact />
          <Route path="/phoneSignup" component={PhoneSignupContainer} exact />
          <Route path="/phoneSignin" component={PhoneSigninContainer} exact />
          <Route path="/verifySignup" component={VerifyPhoneContainer} exact />
          <Route path="/verifySignin" component={VerifySigninContainer} exact />
          <Route
            path="/reset"
            component={NewPasswordContainer}
            exact
          />
          <Route path="/onboarding" component={withValidToken(Onboarding1)} exact />
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
            path="/leaderboard"
            component={withValidToken(Leaderboard1)}
            exact
          />
          <Route
            path="/onboarding-complete"
            component={withValidToken(Onboarding2)}
            exact
          />
          <Route
            path="/upload"
            component={withValidToken(UploadContainer)}
            exact
          />
          <Route
            path="/upgrade"
            component={withValidToken(UpgradeToPro)}
            exact
          />
          <Route
            path="/play"
            component={withValidToken(PlayContainer)}
            exact
          />
          <Route
            path="/welcome"
            component={withValidToken(WelcomeContainer)}
            exact
          />
          <Route
            path="/settings"
            component={withValidToken(SettingsContainer)}
            exact
          />
          <Route
            path="/profile/:username"
            component={withValidToken(ProfileContainerNew)}
            exact
          />
          <Route
            path="/profile-settings"
            component={withValidToken(ProfileSettingsContainer)}
            exact
          />
          <Route
            path="/home"
            component={withValidToken(HomeContainer)}
            exact
          />
          <Route
            path="/leaderboard-home"
            component={withValidToken(LeaderboardHomeContainer)}
            exact
          />
          <Route
            path="/history"
            component={withValidToken(OrderFeedbackHistoryContainer)}
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
          <Route
            path="/result"
            component={withValidToken(ResultContainer)}
            exact
          />
        </Switch>
      </MenuHandlerContext.Provider>
      <Footer />
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
        this.props.history && this.props.history.push("/");
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
