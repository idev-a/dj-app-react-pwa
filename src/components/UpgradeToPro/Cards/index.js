import React from 'react';
import '../UpgradePro.style.scss';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const Cards = (props) => {

    return (
        <FormControlLabel
            className="savedCards"
            control={
                <Checkbox
                    checked={props.selectedPaymentId === props.paymentId}
                    onChange={() => props.handleSavedCardSelect(props.paymentId)}
                    icon={<div className="unchecked" />}
                    checkedIcon={<div className="checked" />}
                    name="saveCardDetails"
                />}
            label={'**** **** **** ' +  props.cardDetails.last4}
        />
    )
}

export default Cards;