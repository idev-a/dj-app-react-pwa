import React from "react";
import content from "./content";
import "./styles.scss";
import moment from "moment";
import Button from "../../../common/Button";

const SubscriptionBox = ({
  subscriptionIsOpen,
  toggleSubscription,
  subscriptionEndDate,
  handleCancelSubscription
}) => {
  return (
    <section className="formContainer">
      <header onClick={toggleSubscription} className="formHeaderContainer">
        <span className="expandIcon">{!subscriptionIsOpen ? "+" : "-"}</span>
        <div className="formHeaderText">{content.SUBCONTAINER4_LABEL}</div>
      </header>
      {subscriptionIsOpen && (
        <React.Fragment>
          <div className="subscriptionRenewBox">
            <div className="subscriptionRenewBoxLabel">
              {content.SUBCONTAINER4_BOX_LABEL}
            </div>
            <div className="subscriptionRenewBoxDate">
              {moment(subscriptionEndDate).format("YYYY/MM/DD")}
            </div>
            <div className="subscriptionRenewBoxAmount">
              {content.SUBCONTAINER4_PRICE_AMOUNT}
            </div>
          </div>
          <div className="subscriptionDescription">
            {content.SUBCONTAINER4_DESCRIPTION}
          </div>
          <div className="buttonWrapper">
            {/* Renew subscription event listener needed here */}

            <Button
              className="launchButton"
              buttonText={content.SUBCONTAINER4_BUTTON_TEXT}
              onClick={handleCancelSubscription}
            ></Button>

            {/* --- */}
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default SubscriptionBox;
