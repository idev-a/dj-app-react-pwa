import React, {useCallback} from "react";
import VerifyPhone from '../../components/VerifyPhone/VerifyPhone'

const VerifyPhoneContainer = (props) => {

  const verifybackClick = useCallback(() => props.history.push("/phoneSignup"), [
    props.history,
  ])
  const verifycloseClick = useCallback(() => props.history.push("/signupScreen"), [
    props.history,
  ])
  
  return (
    <VerifyPhone
    verifybackClick = {verifybackClick}
    verifycloseClick = {verifycloseClick}/>
  );
};

export default VerifyPhoneContainer;
