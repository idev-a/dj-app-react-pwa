import React from "react";
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/IconComponent";
import Button from "../../../common/Button";
import InputField from "../../../common/InputField";
import HearBKHeader from "../../../common/HearBKHeader";
import { Spin } from "antd";

const ResetPassword = ({
  isLoading,
  onInputChange,
  password,
  repeatPassword,
  handleResetPasswordClick
}) => {
  return (
    <React.Fragment>
      <HearBKHeader />
      <div className="forgotPasswordContainer">
        {!isLoading ? (
          <>
            <Icon className="backgroundIcon" iconName="Path85" />
            <div className="iconContainer">
              <Icon className="lockOutlineIcon" iconName="lock_outline_green" />
            </div>
            <div className="contentContainer">
              <header className="resetPasswordHeader">
                {content.RESET_PASSWORD_HEADER}
                <p>{content.RESET_PASSWORD_SUBHEADER}</p>
              </header>
              <div className="inputContainer">
                <InputField
                  onChange={onInputChange}
                  id="password"
                  type="password"
                  className="forgotPassInputField"
                  value={password}
                  placeholder={content.NEW_PASSWORD}
                  hasIcon
                  iconName="lock"
                />
              </div>
              <div className="repeatContainer">
                <InputField
                  onChange={onInputChange}
                  id="repeatPassword"
                  className="forgotPassInputField"
                  value={repeatPassword}
                  placeholder={content.REPEAT_NEW_PASSWORD}
                  hasIcon
                  type="password"
                  iconName="lock"
                />
              </div>
              <div className="buttonContainer">
                <Button
                  onClick={handleResetPasswordClick}
                  className="launchButton"
                  buttonText={content.RESET_PASSWORD}
                />
              </div>
            </div>
          </>
        ) : (
          <Spin size="large" />
        )}
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
