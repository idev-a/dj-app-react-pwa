import React from 'react';
import content from "./content";
import "./styles.scss";
import Icon from "../../../common/IconComponent";
import Button from "../../../common/Button";

const Cookie = (props) => {
    return (
        <div className="cookieContainer">
            <div className="mainIconContainer">
                <Icon className="mainIcon" iconName="COOKIE_1" />
            </div>
            <div className="descriptionContainer">
                <div className="description">
                    {content.DESCRIPTION_1A}
                    <br/>
                    {content.DESCRIPTION_1B}
                    <br/>
                    {content.DESCRIPTION_1C}
                </div>
                <div className="description">
                    {content.DESCRIPTION_2A}
                    <br/>
                    {content.DESCRIPTION_2B}
                </div>
            </div>
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.BUTTON_ONE_TEXT}
                onClick={""}
                ></Button>
            </div>
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.BUTTON_TWO_TEXT}
                onClick={""}
                ></Button>
            </div>
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.BUTTON_THREE_TEXT}
                onClick={""}
                ></Button>
            </div>
        </div>
    );
};

Cookie.defaultProps = {

};

export default Cookie;