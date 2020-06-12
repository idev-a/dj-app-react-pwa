import React, {useCallback} from "react";
import SignupScreen from '../../components/SignupScreen/SignupScreen'

const SignUpScreenContainer = (props) => {

  const emailClick = useCallback(() => props.history.push("/emailSignup"), [
    props.history,
  ]);

  const phoneClick = useCallback(() => props.history.push('/phoneSignup'), [
    props.history,
  ])

  const signupClick = useCallback(() => props.history.push("/"), [
    props.history,
  ])
  
  return (
    <SignupScreen
    emailClick = {emailClick}
    signupClick = {signupClick}
    phoneClick = {phoneClick}
    />
  );
};

export default SignUpScreenContainer;
