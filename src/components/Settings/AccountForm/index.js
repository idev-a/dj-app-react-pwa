import React from "react";
import content from "./content";
import "./styles.scss";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const AccountForm = ({
  accountIsOpen,
  toggleAccount,
  email,
  password,
  repeatPassword,
  onInputChange,
  handleProfileUpdate
}) => {
  return (
    <section className="formContainer">
      <header
        onClick={toggleAccount}
        className="formHeaderContainer"
      >
        <span className="expandIcon">{!accountIsOpen ? "+" : "-"}</span>
        <div className="formHeaderText">{content.SUBCONTAINER2_LABEL}</div>
      </header>
      {accountIsOpen && (
        <React.Fragment>
          <div className="formInputContainer">
            <label for="email" className="formInputLabel">
              {content.SUBCONTAINER2_SUBLABEL1}
            </label>
            <InputField
              id="email"
              className="formInputField"
              value={email}
              onChange={onInputChange}
              placeholder={content.SUBCONTAINER2_PLACEHOLDER1}
              hasIcon
              iconPosition="right"
              iconName="pencil_1"
            />
          </div>
          <div className="formInputContainer">
            <label for="password" className="formInputLabel">
              {content.SUBCONTAINER2_SUBLABEL2}
            </label>
            <InputField
              id="password"
              className="formInputField"
              type="password"
              value={password}
              onChange={onInputChange}
              placeholder={content.SUBCONTAINER2_PLACEHOLDER2}
              hasIcon
              iconPosition="right"
              iconName="pencil_1"
            />
          </div>
          <div className="formInputContainer">
            <label for="password" className="formInputLabel">
              {content.REPEAT_PASSWORD}
            </label>
            <InputField
              id="repeatPassword"
              type="password"
              className="formInputField"
              value={repeatPassword}
              onChange={onInputChange}
              placeholder={content.REPEAT_PASSWORD_PLACEHOLDER}
              hasIcon
              iconPosition="right"
              iconName="pencil_1"
            />
          </div>
          <div className="buttonWrapper">
            <Button
              className="launchButton"
              buttonText={content.SUBCONTAINER2_BUTTON_TEXT}
              onClick={handleProfileUpdate}
            ></Button>
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

AccountForm.defaultProps = {
  password: ""
};

export default AccountForm;
