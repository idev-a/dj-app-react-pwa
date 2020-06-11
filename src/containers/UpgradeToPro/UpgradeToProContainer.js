import React, { useCallback, useState, useEffect } from 'react';
import UpgradeToProComponent from './../../components/UpgradeToPro/UpgraeToProComponent';
import { connect } from "react-redux";
import {
    updateOrderData,
    renewSubscription,
} from "../../state/actions/orderActions";
import {
    getPaymentMethods,
} from "../../state/actions/userActions";
import { orderSelector } from "../../state/selectors/order";
import { toast } from 'react-toastify';

const UpgradeToProContainer = ({ dispatchUpdate, accountName, isSaveCardDetails, getPaymentMethodsDispatchAction, paymentMethods }) => {
    const [shouldCreateToken, setShouldCreateToken] = useState(false);
    const [selectedPaymentId, setSelectedPaymentId] = useState(undefined);

    useEffect(() => {
        window.scrollTo(0, 0);
        getPaymentMethodsDispatchAction();
    }, [getPaymentMethodsDispatchAction]);

    const handleInputChange = useCallback(
        (e) => {
            let payload = {};
            if (e.target.name === "saveCardDetails") {
                payload = {
                    [e.target.name]: e.target.checked,
                };
            } else {
                payload = {
                    [e.target.id]: e.target.value,
                };
            }
            dispatchUpdate(payload);
        },
        [dispatchUpdate]
    );

    const handlePaymentFormError = useCallback((e) => {
        console.log(e);
    }, []);

    const onSubmitPayment = useCallback(
        async (cardInfo) => {
            if (
                !cardInfo.paymentFromSavedCard &&
                !(cardInfo && cardInfo.id && accountName.length > 0)
            ) {
                toast.error("Enter valid card details");
                return;
            }
            const payload = {
                saveCardDetails: isSaveCardDetails,
                paymentToken: cardInfo.id,
                isAddPremium: true,
                ...(cardInfo &&
                    cardInfo.paymentFromSavedCard && { paymentFromSaveCard: true }),
            };

            const response = await renewSubscription(payload, true);
            if (response.ok) {
                toast.success("Payment sucess")
            } else {
                toast.error("Payment failed. Please check your card details or promo code")
            }
        },
        [
            isSaveCardDetails,
            accountName,
        ]
    );

    const handleSaveCardChanges = useCallback(
        (cardInfo) => {
            setShouldCreateToken(false);
            onSubmitPayment(cardInfo);
        },
        [onSubmitPayment]
    );

    const handleOrderNowClick = useCallback(() => {
        if (selectedPaymentId) {
          onSubmitPayment({ id: selectedPaymentId, paymentFromSavedCard: true });
        } else {
        setShouldCreateToken(true);
        }
    }, [onSubmitPayment, selectedPaymentId]);

    const handleSelectPayment = useCallback(
        (id) => {
            if (id === selectedPaymentId) {
                setSelectedPaymentId(undefined);
            } else {
                setSelectedPaymentId(id);
            }
        },
        [selectedPaymentId]
    );

    const handleOnClickBack = () => {
        window.history.back();
    }

    return (
        <UpgradeToProComponent
            accountName={accountName}
            isSaveCardDetails={isSaveCardDetails}
            onInputChange={handleInputChange}
            handlePaymentFormError={handlePaymentFormError}
            shouldCreateToken={shouldCreateToken}
            saveCardInformation={handleSaveCardChanges}
            onSubmitFeedback={handleOrderNowClick}
            paymentMethods={paymentMethods}
            selectedPaymentId={selectedPaymentId}
            handleSavedCardSelect={handleSelectPayment}
            handleOnClickBack={handleOnClickBack}
        />
    )
}


const dispatchAction = (dispatch) => ({
    dispatchUpdate: (payload) => dispatch(updateOrderData(payload)),
    getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
});

export default connect(
    orderSelector,
    dispatchAction
)(UpgradeToProContainer);