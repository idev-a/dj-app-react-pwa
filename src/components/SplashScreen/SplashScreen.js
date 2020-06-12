import React from "react";
import "./SplashScreen.styles.scss";
import content from "./content";

const SplashScreen = ({handleClick, signupClick}) => {
  const handleOnClick = () => {
      handleClick()
  }
  const handleOnSignupClick = () => {
    signupClick()
}
  return (
    <div className="container">
      <div className="login-content">
        <div className="logo-content"/>
        <p className="main-title">Your <br/> takeover<br/> starts now</p>
        <button className="login-splashButton" onClick={handleOnClick}>{content.LOGIN}</button>
        <button className="signup-splashButton" onClick={handleOnSignupClick}>{content.SIGN_UP}</button>
      </div>

    </div>
  );
};

export default SplashScreen;
