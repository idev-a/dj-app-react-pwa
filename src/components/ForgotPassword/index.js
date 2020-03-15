import React from "react";
import "./styles.scss";
import content from "./content";
import Icon from "../../common/IconComponent";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import HearBKHeader from "../../common/HearBKHeader";

const ForgotPassword = ({ email, onInputChange, handleSubmitClick }) => {
  return (
    <>
      <div>
        <HearBKHeader />
      </div>
      <section className="forgotPasswordContainer">
        <React.Fragment>
          <Icon className="backgroundIcon" iconName="Path85" />
          <div className="iconContainer">
            <Icon className="helpIcon" iconName="help" />
          </div>
          <div className="contentContainer">
            <header className="forgotPasswordHeader">
              {content.FORGOT_PASSWORD_HEADER}
              <p>{content.FORGOT_PASSWORD_SUBHEADER}</p>
            </header>
            <div className="inputContainer">
              <InputField
                onChange={onInputChange}
                name="email"
                className="forgotPassInputField"
                value={email}
                placeholder={content.EMAIL_ADDRESS}
                hasIcon
                iconName="email"
              />
            </div>
            <Button
              onClick={handleSubmitClick}
              className="launchButton"
              buttonText={content.CONTINUE}
            />
          </div>
        </React.Fragment>
      </section>
    </>
  );
};

ForgotPassword.defaultProps = {
  email: ""
};

export default ForgotPassword;
