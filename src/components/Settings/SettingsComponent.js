import React from 'react';
import cx from "classnames";
import content from "./content";
import "./Settings.styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import PaymentAccountForm from "./PaymentAccountForm";
import SubscriptionBox from "./SubscriptionBox";
import ListenerPreferencesForm from "./ListenerPreferencesForm";

const SettingsComponent = (props) => {

    const toggleExpand = (e) => {
        const el = e.target;
        el.parentNode.classList.toggle('expand');
        if (el.parentNode.classList.contains('expand')) {
            el.firstElementChild.innerHTML = "-";
        } else {
            el.firstElementChild.innerHTML = "+";
        }
    }

    return (
        <div className="settingsContainer">
            <div className="settingsHeadingContainer">
                <Icon className={cx("exitIcon")} iconName={"exittoapp"} />
                <div className="settingsHeader">
                    {content.HEADER}
                </div>
                <div className="profilePicIconContainer">
                    <Icon className={cx("profilePicIcon")} iconName={"profilepic"} />
                </div>
            </div>
            <div className="settingsStatusContainer">
                <div className="points">
                    <div className="subHeaderLabel">
                        {content.POINTS_LABEL}
                    </div>
                    <div className="subHeaderAmount">
                        {content.POINTS}
                    </div>
                </div>
                <div className="status">
                    <div className="statusBox">
                        {content.STATUS}
                    </div>
                    <div className="insiderBox">
                        <Icon className={cx("checkIcon")} iconName={"playlistaddcheck"} />
                        {content.INSIDER}
                    </div>
                </div>
                <div className="balance">
                    <div className="subHeaderLabel">
                        {content.BALANCE_LABEL}
                    </div>
                    <div className="subHeaderAmount">
                        <span className="subHeaderAmountFontAdjust">
                            {content.BALANCE_SIGN}
                        </span>
                        <span>
                            {content.BALANCE_DOLLARS}
                        </span>
                        <span className="subHeaderAmountFontAdjust">
                            {content.BALANCE_CENTS}
                        </span>
                    </div>
                </div>
            </div>
            <ProfileForm toggleExpand={toggleExpand} />
            <AccountForm toggleExpand={toggleExpand} />
            <PaymentAccountForm toggleExpand={toggleExpand} />
            <SubscriptionBox toggleExpand={toggleExpand} />
            <ListenerPreferencesForm toggleExpand={toggleExpand} />
            <div className="buttonWrapper">
                <Button 
                    className="launchButton logoutButton" 
                    hasIcon={true} 
                    iconClassName="exitToAppIcon" 
                    iconName="exittoapp_blue" 
                    buttonText={content.LOGOUT}
                ></Button>
            </div>
        </div>
    );
};

export default SettingsComponent;