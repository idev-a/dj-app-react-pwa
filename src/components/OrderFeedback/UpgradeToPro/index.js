import React from "react";
import Checkbox from "rc-checkbox";
import PropTypes from "prop-types";
import content from "./content";
import IconComponent from "../../../common/IconComponent";
import "./styles.scss";
import "rc-checkbox/assets/index.css";

const UpgradeToPro = ({ isAddPremium, onInputChange }) => {
  return (
    <div className="upgradeToProContainer">
      <div className="upgradeToProHeader">{content.UPGRADE_TO_PRO}</div>
      <div className="subscriptionContainer">
        <div className="insiderContainer">
          <div className="insiderText">{content.BECOME_AN_INSIDER}</div>
          <IconComponent className="silverIcon" iconName="HearBKSilverLogo" />
        </div>
        <div className="priceContainer">
          <span className="currency">{content.CURRENCY_SIGN}</span>
          <span className="proAmount">{content.PRO_AMOUNT}</span>
          <span className="perYear">{content.PER_YEAR}</span>
        </div>
      </div>
      <div className="subscriptionText">{content.BILLING_DETAILS}</div>
      <div className="proDescriptionContainer">
        <p className="description">{content.PRO_DESCRIPTION_1}</p>
        <p className="description">{content.PRO_DESCRIPTION_2}</p>
        <p className="boldDescription">{content.PRO_DESCRIPTION_3}</p>
      </div>
      <div className="addPremiumContainer">
        <Checkbox
          name="isAddPremium"
          checked={isAddPremium}
          onChange={onInputChange}
        />
        <div className="addSubscriptionText">
          {content.ADD_SUBSCRIPTION_TEXT}
        </div>
      </div>
    </div>
  );
};

UpgradeToPro.propTypes = {
  isAddPremium: PropTypes.bool,
  onInputChange: PropTypes.func,
};

UpgradeToPro.defaultProps = {
  isAddPremium: false,
  onInputChange: () => {},
};


export default UpgradeToPro;
