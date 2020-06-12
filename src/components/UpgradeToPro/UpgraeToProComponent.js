import React from 'react';
import './UpgradePro.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as BackArrow } from '../../assets/icon/arrow.svg';
import { StripeProvider, Elements } from "react-stripe-elements";
import { STRIPE_KEY } from "../../config";
import Button from './../../common/Button';
import CardForm from './CardForm';
import Cards from './Cards';
const UpgradeToProComponent = ({
    onInputChange,
    accountName,
    isSaveCardDetails,
    handlePaymentFormError,
    shouldCreateToken,
    saveCardInformation,
    onSubmitFeedback,
    paymentMethods,
    selectedPaymentId,
    handleSavedCardSelect,
}) => {

    return (
        <div className="upgraePro-main-container">
            <div className="home-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.UPLOAD}</span><br />
                    <svg className="back-arrow"><BackArrow /></svg>
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">1.2</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.3</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="upgrade-premium-text-container">
                <span className="upgrade-premium-text-header">{content.UPGRADE_TO_PREMIUM}</span>
                <p className="upgrade-premium-text">{content.PREMIUM_TEXT}</p>
            </div>
            <StripeProvider apiKey={STRIPE_KEY}>
                <Elements>
                    <section>
                        <div className="payment-option-container">
                            <span className="payment-option-header">{content.PAYMENT_OPTIONS}</span>
                            {paymentMethods &&
                                paymentMethods.length > 0 &&
                                paymentMethods.map((method) => (
                                    <Cards
                                        {...method}
                                        selectedPaymentId={selectedPaymentId}
                                        handleSavedCardSelect={handleSavedCardSelect}
                                    />
                                ))}
                        </div>
                        <span className="or-txt">OR</span>
                        <CardForm
                            onInputChange={onInputChange}
                            accountName={accountName}
                            isSaveCardDetails={isSaveCardDetails}
                            handlePaymentFormError={handlePaymentFormError}
                            shouldCreateToken={shouldCreateToken}
                            submitPayment={saveCardInformation}
                        />
                    </section>
                </Elements>
            </StripeProvider>
            <Button
                className="upgrade-button"
                buttonText={content.UPGRADE_LABEL}
                onClick={onSubmitFeedback}
            ></Button>
            <small className="footer-text">{content.FOOTER_TEXT}</small>
        </div>
    )
}

export default UpgradeToProComponent;