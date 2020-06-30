import React from 'react';
import './UpgradePro.style.scss';
import cx from "classnames";
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
    handleOnClickBack,
    userDetails,
    handleOnSelectPlan,
    selectedPlan,
}) => {

    return (
        <div className="upgraePro-main-container">
            <div className="home-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.UPLOAD}</span><br />
                    <svg className="back-arrow" onClick={handleOnClickBack}><BackArrow /></svg>
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">{userDetails.balance}</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.0</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="upgrade-premium-text-container">
                <section className="upgrade-premium-text-inner-container">
                    <span className="upgrade-premium-text-header">{content.BECAME}</span>
                    <span className="upgrade-premium-text-header-red">{content.BREAKER}</span>
                    <span className="upgrade-premium-text-header">{content.PRO}</span>
                </section><br />
                <p className="upgrade-premium-text">{content.PREMIUM_TEXT}</p>
            </div>
            <div className="upgrade-premium-table-container">
                <div className="premium-table-content">
                    <span className="premium-table-text-1">{content.SUBMIT_MUSIC}</span><br />
                    <span className="premium-table-text-2">{content.WITH_KEY}</span><br /><br />
                    <small className="premium-table-text-3">{content.BASIC_MEMBER}</small>
                </div>
                <div className="premium-table-content">
                    <span className="premium-table-text-1">{content.ACCESS_ADVANCE}</span><br /><br />
                    <small className="premium-table-text-3">{content.BASIC_MEMBER_COMMENT}</small>
                </div>
                <div className="premium-table-content">
                    <span className="premium-table-text-1">{content.GET_NOTIFIED}</span><br /><br />
                    <small className="premium-table-text-3">{content.BASIC_MEMBER_COMMENT}</small>
                </div>
                <div className="premium-table-content">
                    <span className="premium-table-text-1">{content.GET_PRO_BADGE}</span><br /><br />
                </div>
                <div className="premium-table-content">
                    <span className="premium-table-text-1">{content.RECEIVE_PRIORITY}</span><br /><br />
                </div>
                <div className="premium-table-content-2">
                    <span className="premium-table-text-1">{content.LEVEL_UP}</span><br /><br />
                </div>
            </div>
            <div className="membership-main-container">
                <span className="rating-header-text">{content.MEMBERSHIP}</span>
                <div className="subscription-swith-main-container">
                    <div className="subscription-swith-container">
                        <div
                            className={cx(
                                "subscription-button-inactive",
                                selectedPlan === 1 && "subscription-button-active"
                            )}
                            onClick={() => handleOnSelectPlan(1)}
                        >
                            <small className="subscription-button-text">{content.YEARLY}</small>
                        </div>
                        <div
                            className={cx(
                                "subscription-button-inactive",
                                selectedPlan === 2 && "subscription-button-active"
                            )}
                            onClick={() => handleOnSelectPlan(2)}
                        >
                            <small className="subscription-button-text">{content.MONTHLY}</small>
                        </div>
                    </div>
                </div>
                <div className="rating-container-1">
                    {selectedPlan === 1 && <><span className="rating-amount-text">$100/</span><small className="listner-text">{content.YEAR}</small></>}
                    {selectedPlan === 2 && <><span className="rating-amount-text">$15/</span><small className="listner-text">{content.MONTH}</small></>}
                </div>
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
                buttonText={selectedPlan === 1 ? content.YEARLY_LABEL : content.MONTHLY_LABEL}
                onClick={onSubmitFeedback}
            ></Button>
            <small className="footer-text">{content.FOOTER_TEXT}</small>
        </div>
    )
}

export default UpgradeToProComponent;