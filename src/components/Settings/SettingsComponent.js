import React, { useContext } from "react";
import content from "./content";
import "./Settings.styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import PaymentAccountForm from "./PaymentAccountForm";
import SubscriptionBox from "./SubscriptionBox";
import { MenuHandlerContext } from "../../routes";

const SettingsComponent = ({
  profileIsOpen,
  accountIsOpen,
  paymentIsOpen,
  subscriptionIsOpen,
  toggleProfile,
  toggleAccount,
  togglePayment,
  toggleSubscription,
  logOutClick,
  details,
  userObject,
  paymentMethods,
  password,
  repeatPassword,
  onInputChange,
  handleProfileUpdate,
  handleCancelSubscription
}) => {
  const { subscriptionEndDate, profile_image, balance } = details;
  const { user_name, display_name, email } = userObject;
  const handleMenuClick = useContext(MenuHandlerContext);
  return (
    <div className="settingsContainer">
      <div className="largeBannerHeaderContainer">
        <div onClick={handleMenuClick} className="menuIconContainer">
          <Icon iconName="menu_white" className="menuIcon" />
        </div>
        <Button
          isIcon
          className="exitIcon"
          iconName="exittoapp"
          onClick={logOutClick}
        />
        <div className="headerTitle1">{content.HEADER}</div>
        <div className="profilePicIconContainer">
          {profile_image ? (
            <img
              alt="profileImg"
              className="profilePicIcon"
              src={profile_image}
            />
          ) : (
            <Icon
              className="defaultProfilePicIcon"
              iconName="default_pro_pic_icon"
            />
          )}
        </div>
      </div>
      <div className="settingsStatusContainer">
        <div className="status">
          <div className="statusBox">{content.STATUS}</div>
          <div className="insiderBox">
            <Icon className="checkIcon" iconName="playlistaddcheck" />
            {content.INSIDER}
          </div>
        </div>
        <div className="balance">
          <div className="subHeaderLabel">{content.BALANCE_LABEL}</div>
          <div className="subHeaderAmount">
            <span className="subHeaderAmountFontAdjust">
              {content.BALANCE_SIGN}
            </span>
            <span>{balance}</span>
          </div>
        </div>
      </div>
      <ProfileForm
        profileIsOpen={profileIsOpen}
        toggleProfile={toggleProfile}
        displayName={display_name}
        userName={user_name}
        onInputChange={onInputChange}
        handleProfileUpdate={handleProfileUpdate}
      />
      <AccountForm
        accountIsOpen={accountIsOpen}
        toggleAccount={toggleAccount}
        email={email}
        password={password}
        repeatPassword={repeatPassword}
        onInputChange={onInputChange}
        handleProfileUpdate={handleProfileUpdate}
      />

      {/* PaymentAccountForm adjustment required */}

      <PaymentAccountForm
        paymentMethods={paymentMethods}
        paymentIsOpen={paymentIsOpen}
        togglePayment={togglePayment}
        onInputChange={onInputChange}
      />
      <SubscriptionBox
        subscriptionIsOpen={subscriptionIsOpen}
        toggleSubscription={toggleSubscription}
        subscriptionEndDate={subscriptionEndDate}
        onInputChange={onInputChange}
        handleCancelSubscription={handleCancelSubscription}
      />

      {/* Adjusment need ends here */}

      {/* Logout button needed setup starts here */}

      <div className="buttonWrapper">
        <Button
          className="launchButton logoutButton"
          iconClassName="exitToAppIcon"
          iconName="exittoapp_blue"
          buttonText={content.LOGOUT}
          onClick={logOutClick}
        ></Button>
      </div>

      {/* Logout needed setup ends here */}
    </div>
  );
};

export default SettingsComponent;
