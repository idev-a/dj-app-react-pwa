import React from 'react';
import cx from "classnames";
import content from "./content";
import "./Settings.styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
<<<<<<< HEAD
import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import PaymentAccountForm from "./PaymentAccountForm";
import SubscriptionBox from "./SubscriptionBox";
import ListenerPreferencesForm from "./ListenerPreferencesForm";
=======
import PaymentCard from "./components/PaymentCardComponent";
import Details from "../../containers/ListenerPreferences/Details";
import Price from "../../containers/ListenerPreferences/Price";
>>>>>>> minor adjustments

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
<<<<<<< HEAD
            <ProfileForm toggleExpand={toggleExpand} />
            <AccountForm toggleExpand={toggleExpand} />
            <PaymentAccountForm toggleExpand={toggleExpand} />
            <SubscriptionBox toggleExpand={toggleExpand} />
            <ListenerPreferencesForm toggleExpand={toggleExpand} />
=======
            <div className="settingsSubContainers">
                <div onClick={(e) => toggleExpand(e)} className="subContainerHeader">
                    {content.SUBCONTAINER1_LABEL}
                    <span className="expandIcon">
                        +
                    </span>
                </div>
                <div className="subContainerLabel">
                    {content.SUBCONTAINER1_SUBLABEL1}
                </div>
                <div className="inputFieldContainer">
                    <InputField 
                        id="displayName"
                        onChange={onInputChange}
                        value={displayName}
                        placeholder={content.SUBCONTAINER1_PLACEHOLDER1}
                        className="inputField"
                        iconName="pencil"
                    />
                </div>
                <div className="subContainerLabel">
                    {content.SUBCONTAINER1_SUBLABEL2}
                </div>
                <div className="inputFieldContainer">
                    <InputField
                        id="username"
                        onChange={onInputChange}
                        value={username}
                        placeholder={content.SUBCONTAINER1_PLACEHOLDER2}
                        className="inputField"
                        iconName="pencil"
                    />
                </div>
            </div>
            <div className="settingsSubContainers">
                <div onClick={(e) => toggleExpand(e)} className="subContainerHeader">
                    {content.SUBCONTAINER2_LABEL}
                    <span className="expandIcon">
                        +
                    </span>
                </div>
                <div className="subContainerLabel">
                    {content.SUBCONTAINER2_SUBLABEL1}
                </div>
                <div className="inputFieldContainer">
                    <InputField 
                        id="email"
                        onChange={onInputChange}
                        value={email}
                        placeholder={content.SUBCONTAINER2_PLACEHOLDER1}
                        className="inputField"
                        iconName="pencil"
                    />
                </div>
                <div className="subContainerLabel">
                        {content.SUBCONTAINER2_SUBLABEL2}
                </div>
                <div className="inputFieldContainer">
                    <InputField
                        id="password"
                        onChange={onInputChange}
                        value={password}
                        placeholder={content.SUBCONTAINER2_PLACEHOLDER2}
                        className="inputField"
                        iconName="pencil"
                    />
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.SUBCONTAINER2_BUTTON_TEXT} ></Button>
                </div>
            </div>
            <div className="settingsSubContainers">
                <div onClick={(e) => toggleExpand(e)} className="subContainerHeader">
                    {content.SUBCONTAINER3_LABEL}
                    <span className="expandIcon">
                        +
                    </span>
                </div>
                <div className="paymentCardsContainer">
                    <PaymentCard />
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.SUBCONTAINER3_BUTTON_TEXT} ></Button>
                </div>
            </div>
            <div className="settingsSubContainers">
                <div onClick={(e) => toggleExpand(e)} className="subContainerHeader">
                    {content.SUBCONTAINER4_LABEL}
                    <span className="expandIcon">
                        +
                    </span>
                </div>
                <div className="subscriptionRenewBox">
                    <div className="subscriptionRenewBoxLabel">
                        {content.SUBCONTAINER4_BOX_LABEL}
                    </div>
                    <div className="subscriptionRenewBoxDate">
                        January 1, 2021
                    </div>
                    <div className="subscriptionRenewBoxAmount">
                        $99.00
                    </div>
                </div>
                <div className="subscriptionDescription">
                    {content.SUBCONTAINER4_DESCRIPTION}
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.SUBCONTAINER4_BUTTON_TEXT} ></Button>
                </div>
            </div>
            <div className="settingsSubContainers detailsComponent">
                <div onClick={(e) => toggleExpand(e)} className="subContainerHeader">
                    {content.SUBCONTAINER5_LABEL}
                    <span className="expandIcon">
                        +
                    </span>
                </div>
                <Details />
                <div className="priceContainer">
                    <Price />
                </div>
            </div>
>>>>>>> minor adjustments
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