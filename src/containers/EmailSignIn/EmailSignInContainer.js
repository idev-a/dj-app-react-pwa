import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import EmailSignIn from '../../components/EmailSignIn/EmailSignIn';
import { authenticateUser } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const EmailSignInContainer = ({ history, loginUser, isRememberUser = false }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [loginDetails, setLoginDetails] = useState({});
  const handleInputChange = (e) => {
    let value = e.target.value;
    if (e.target.id === "email") {
      value = value.toLowerCase();
    }
    setLoginDetails({
      ...loginDetails,
      [e.target.id]: value,
    });
  };

  const handleUserLogin = useCallback(() => {
    loginUser(loginDetails, isRememberUser);
  }, [loginUser, isRememberUser, loginDetails]);

  const emailSigninBack = useCallback(() => history.push("/loginScreen"), [
    history,
  ])
  const emailSigninClose = useCallback(() => history.push("/loginScreen"), [
    history,
  ])
  const emailSignupPage = useCallback(() => history.push("/emailSignup"), [
    history,
  ])
  const emailresetPassword = useCallback(() => history.push("/emailReset"), [
    history,
  ])
  return (
    <EmailSignIn
      emailSigninBack={emailSigninBack}
      emailSigninClose={emailSigninClose}
      emailSignupPage={emailSignupPage}
      emailresetPassword={emailresetPassword}
      onInputChange={handleInputChange}
      loginUser={handleUserLogin}
      loginDetails={loginDetails}
    />
  )
}

const mapStateToProps = (state) => ({
  user: userSelector(state),
});

const mapActions = (dispatch) => ({
  loginUser: (data, isRememberUser) =>
    dispatch(authenticateUser(data, isRememberUser)),
});

export default connect(
  mapStateToProps,
  mapActions
)(EmailSignInContainer);