import React from "react";
import cx from "classnames";
import { Radio } from "antd";
import content from "./content";
import "./styles.scss";
import Icon from "../../../../common/IconComponent";

const PaymentCardComponent = (props) => {
  return (
    <div className="paymentCard">
      <div className="cancelIconContainer">
        <Icon className={cx("cancelIcon")} iconName={"Cancel"} />
      </div>
      <div className="paymentCardContentContainer">
        <Radio
          className="radioButton"
          checked={props.selectedPaymentId === props.paymentId}
          onChange={() => props.handleSavedCardSelect(props.paymentId)}
        />
        <Icon className={cx("creditCardIcon")} iconName={"creditcard"} />
        <span className="paymentCardContent1">{content.CARD_CONTENT1}</span>
        <span className="paymentCardContent2">
          {content.CARD_CONTENT2}
          {props.cardDetails.last4}
        </span>
      </div>
    </div>
  );
};

export default PaymentCardComponent;
