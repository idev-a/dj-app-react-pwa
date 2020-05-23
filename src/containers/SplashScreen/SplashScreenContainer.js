import React, {useCallback} from "react";
import SplashScreen from '../../components/SplashScreen/SplashScreen'

const SplashScreenContainer = (props) => {
  const handleClick = useCallback(() => props.history.push("/loginScreen"), [
    props.history,
  ]);
  const signupClick = useCallback(() => props.history.push("/signupScreen"), [
    props.history,
  ]);
  return (
    <SplashScreen
    handleClick={handleClick}
    signupClick={signupClick}
    />
  );
};

export default SplashScreenContainer;
