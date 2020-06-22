import React, {useCallback, useEffect} from "react";
import LoginScreen from '../../components/LoginScreen/LoginScreen'

const LoginScreenContainer = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const loginBack = useCallback(() => props.history.push("/"), [
    props.history,
  ])

  const handleSignIn = useCallback(() => props.history.push("/emailSignin"), [
    props.history,
  ])
  const handlephoneSignIn = useCallback(() => props.history.push("/phoneSignin"), [
    props.history,
  ])
  
  return (
    <LoginScreen
    loginBack = {loginBack}
    handleSignIn = {handleSignIn}
    handlephoneSignIn = {handlephoneSignIn}
    />
  );
};

export default LoginScreenContainer;
