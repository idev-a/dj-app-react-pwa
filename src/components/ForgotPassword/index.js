import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../common/IconComponent";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import ResetPassword from "./ResetPassword";

const ForgotPassword = ({
    email,
    password,
    isForgotPassword,
    setIsForgotPassword,
    isContinue,
    setIsContinue,
    onInputChange
}) => {
    return (
        <section className="forgotPasswordContainer">
            {!isContinue && (
                <React.Fragment>
                    <Icon className="backgroundIcon" iconName="Path85" />
                    <Button 
                        onClick={() => setIsForgotPassword(!isForgotPassword)} 
                        className="cancelIcon" 
                        isIcon 
                        iconName="cancel"
                    />
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
                                className="inputField"
                                value={email}
                                placeholder={content.EMAIL_ADDRESS}
                                hasIcon
                                iconName="email"
                            />
                        </div>
                        <div className="buttonContainer">
                            <Button 
                                onClick={() => setIsContinue(!isContinue)}
                                className="launchButton"
                                buttonText={content.CONTINUE}
                            />
                        </div>
                    </div>
                </React.Fragment>
            )}
            {isContinue && (
                <ResetPassword 
                    setIsContinue={setIsContinue}
                    isContinue={isContinue}
                    onInputChange={onInputChange}
                    password={password}
                />
            )}
        </section>
    );
};

ForgotPassword.defaultProps = {
    email: ""
}

export default ForgotPassword; 