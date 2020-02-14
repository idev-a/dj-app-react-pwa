import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/IconComponent";
import Button from "../../../common/Button";
import InputField from "../../../common/InputField";

const ResetPassword = ({
    setIsContinue,
    isContinue,
    onInputChange,
    password
}) => {
    return (
        <React.Fragment>
            <Icon className="backgroundIcon" iconName="Path85" />
            <Button 
                onClick={() => setIsContinue(!isContinue)} 
                className="arrowBackIcon" 
                isIcon
                iconName="arrow_back"
            />
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
                        name="password"
                        className="inputField"
                        value={password}
                        placeholder={content.NEW_PASSWORD}
                        hasIcon
                        iconName="lock"
                    />
                </div>
                <div className="repeatContainer">
                    <InputField 
                        onChange={onInputChange}
                        name="password"
                        className="inputField"
                        value={password}
                        placeholder={content.REPEAT_NEW_PASSWORD}
                        hasIcon
                        iconName="lock"
                    />
                </div>
                <div className="buttonContainer">
                    <Button 
                        onClick={""}
                        className="launchButton"
                        buttonText={content.RESET_PASSWORD}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword;