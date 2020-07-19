import React, { useEffect } from 'react';
import content from '../content';
import '../UpgradePro.style.scss';
import {
    CardNumberElement,
    CardCVCElement,
    CardExpiryElement,
    injectStripe,
} from "react-stripe-elements";
import { FormControlLabel, Checkbox } from '@material-ui/core';
import InputField from './../../../common/InputField';

const CardForm = ({
    onInputChange, 
    accountName, 
    handlePaymentFormError, 
    isSaveCardDetails,
    stripe,
    shouldCreateToken,
    submitPayment,
}) => {
    useEffect(() => {
      if (shouldCreateToken) {
        (async () => {
          const { token } = await stripe.createToken({ name: accountName });
          submitPayment(token);
        })();
      }
    }, [shouldCreateToken, accountName, stripe, submitPayment]);

    const style = {
        base: {
            color: '#ffffff',
        }
    }

    return (
        <div className="card-information-container">
            <span className="card-information-header-txt">{content.CARD_INFORMATION}</span>
            <InputField
                id="accountName"
                value={accountName}
                onChange={onInputChange}
                type="text"
                placeholder={content.NAME}
                className="inputField"
            />
            <CardNumberElement
                className="inputField"
                placeholder={content.CARD_NUMBER}
                onReady={handlePaymentFormError}
                style={style}
            />
            <div className="month-year-cvc-container">
                <CardCVCElement
                    className="card-cvc"
                    placeholder={content.CARD_CVC}
                    onReady={handlePaymentFormError}
                    style={style}
                />
                <CardExpiryElement
                    className="card-month-year"
                    placeholder={content.CARD_MONTH}
                    onReady={handlePaymentFormError}
                    style={style}
                />
            </div>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSaveCardDetails}
                        onChange={onInputChange}
                        icon={<div className="unchecked" />}
                        checkedIcon={<div className="checked" />}
                        name="saveCardDetails"
                    />}
                label="Save Card"
            />
        </div>
    )
}

export default injectStripe(CardForm);