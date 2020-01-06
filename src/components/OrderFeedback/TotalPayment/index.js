import React from "react";
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";

const TrackPaymentDetails = ({
  trackTitle,
  trackGenre,
  amount,
  removePayment,
}) => {
  return (
    <div className="trackPaymentComponent">
      <div className="trackDetails">
        <div className="trackTitle">{trackTitle}</div>
        {trackGenre && <div className="trackGenre">{trackGenre}</div>}
      </div>
      <div className="amountContainer">
        <div className="amount">
          {content.CURRENCY}
          {amount.toFixed(2)}
        </div>
        <Button
          className="cancelIcon"
          isIcon
          onClick={removePayment}
          iconName="cancel"
        />
      </div>
    </div>
  );
};
const TotalPaymentComponent = () => {
  return (
    <div className="totalPaymentContainer">
      <div className="totalPaymentHeader">{content.TOTAL_PAY_TEXT}</div>
      <div className="trackPaymentContainer">
        <TrackPaymentDetails
          trackTitle="Track Title"
          trackGenre="Genre"
          amount={1}
        />
      </div>
      <div className="totalAmountContainer">
        <div className="currency">{content.CURRENCY}</div>
        <div className="amountContainer">
            <span className="amount">1</span>
            <span className="decimalPart">.00</span>
        </div>
      </div>
    </div>
  );
};

export default TotalPaymentComponent;
