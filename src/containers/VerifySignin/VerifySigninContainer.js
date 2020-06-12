import React, {useCallback} from "react";
import VerifySignin from '../../components/VerifySignin/VerifySignin'

const VerifySigninContainer = (props) => {

  const verifysigninbackClick = useCallback(() => props.history.push("/phoneSignin"), [
    props.history,
  ])
  const verifysignincloseClick = useCallback(() => props.history.push("/loginScreen"), [
    props.history,
  ])
  
  return (
    <VerifySignin
    verifysigninbackClick = {verifysigninbackClick}
    verifysignincloseClick = {verifysignincloseClick}/>
  );
};

export default VerifySigninContainer;
