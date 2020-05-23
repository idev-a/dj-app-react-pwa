import React, {useCallback} from "react";
import PhoneSignup from '../../components/PhoneSignup/PhoneSignup'

const PhoneSignupContainer = (props) => {

  const onNextClick = useCallback(() => props.history.push("/verifySignup"), [
    props.history,
  ]);

  const phonebackClick = useCallback(() => props.history.push("/signupScreen"), [
    props.history,
  ])
  const phonecloseClick = useCallback(() => props.history.push("/signupScreen"), [
    props.history,
  ])
  
  return (
    <PhoneSignup
    onNextClick = {onNextClick}
    phonebackClick = {phonebackClick}
    phonecloseClick = {phonecloseClick}/>
  );
};

export default PhoneSignupContainer;
