import React, { useEffect } from "react";
import capitalize from "lodash/capitalize";
import Checkbox from "rc-checkbox";
import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
  injectStripe,
} from "react-stripe-elements";
import content from "./content";
import InputField from "../../../common/InputField";
import "rc-checkbox/assets/index.css";
import "./styles.scss";

const PaymentForm = ({
  accountName,
  isSaveCardDetails,
  shouldCreateToken,
  onInputChange,
  stripe,
  submitPayment,
  handlePaymentFormError,
  ...props
}) => {
  useEffect(() => {
    if (shouldCreateToken) {
      (async () => {
        const { token } = await stripe.createToken({ name: accountName });
        submitPayment(token);
      })();
    }
  }, [shouldCreateToken, accountName, stripe, submitPayment]);
  return (
    <section className="paymentFormContainer">
      <header className="paymentFormHeader">{content.PAYMENT_HEADER}</header>
      <div className="paymentInputContainer">
        <label className="titleLabel">{content.NAME_ON_CARD}</label>
        <InputField
          id="accountName"
          value={accountName}
          className="titleInput"
          placeholder={capitalize(content.NAME_ON_CARD)}
        />
        <label className="titleLabel">{content.CARD_NUMBER_LABEL}</label>
        <CardNumberElement
          className="titleInput"
          placeholder={content.CARD_NUMBER_PLACEHOLDER}
          onReady={handlePaymentFormError}
        />
        <div className="cardDetailsContainer">
          <div>
            <label className="titleLabel">{content.EXPIRY_DATE_LABEL}</label>
            <CardExpiryElement
              className="titleInput"
              placeholder={content.EXPIRY_DATE_PLACEHOLDER}
              onReady={handlePaymentFormError}
            />
          </div>
          <div>
            <label className="titleLabel">{content.CVC_LABEL}</label>
            <CardCVCElement
              className="titleInput"
              placeholder={content.CVC_PLACEHOLDER}
              onReady={handlePaymentFormError}
            />
          </div>
        </div>
        <div className="saveCardContainer">
          <Checkbox
            className="checkBoxStyle"
            name="saveCardDetails"
            checked={isSaveCardDetails}
            onChange={onInputChange}
          />
          <div className="saveCardText">{content.SAVE_CARD_TEXT}</div>
        </div>
      </div>
    </section>
  );
};

export default injectStripe(PaymentForm);
