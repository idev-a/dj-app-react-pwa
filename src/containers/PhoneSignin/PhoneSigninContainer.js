import React, {useCallback} from "react";
import PhoneSignin from '../../components/PhoneSignin/PhoneSignin'

const PhoneSigninContainer = (props) => {

  const onNextsigninClick = useCallback(() => props.history.push("/verifySignin"), [
    props.history,
  ]);

  const phonesigninbackClick = useCallback(() => props.history.push("/loginScreen"), [
    props.history,
  ])
  const phonesignincloseClick = useCallback(() => props.history.push("/loginScreen"), [
    props.history,
  ])
  
  return (
    <PhoneSignin
    onNextsigninClick = {onNextsigninClick}
    phonesigninbackClick = {phonesigninbackClick}
    phonesignincloseClick = {phonesignincloseClick}/>
  );
};

export default PhoneSigninContainer;
