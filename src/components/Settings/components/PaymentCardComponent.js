import React from 'react';
import cx from "classnames";
import content from "./content";
import "./PaymentCardComponent.styles.scss";
import Icon from "../../../common/IconComponent";

const PaymentCardComponent = ({}) => {
    return (
        <div className="paymentCard">
            <div className="cancelIconContainer">
                <Icon className={cx("cancelIcon")} iconName={"cancel"} />
            </div>
            <div className="selectCircleIconContainer">
                <div className="selectCircleIcon">

                </div>
            </div>
            <div className="paymentCardContentContainer">
                <Icon className={cx("creditCardIcon")} iconName={"creditcard"} />
                <span className="paymentCardContent1">
                    {content.CARD_CONTENT1}
                </span>
                <span className="paymentCardContent2">
                    {content.CARD_CONTENT2}
                    4417
                </span>
            </div>
        </div>
    )
}

export default PaymentCardComponent;