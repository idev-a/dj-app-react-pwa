import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import IconComponent from "../../common/IconComponent";
import content from "./content";
import "./styles.scss";
import UploadTrackForm from "./UploadTrackForm";
import UpgradeToPro from "./UpgradeToPro";
import TotalPaymentComponent from "./TotalPayment";
import PaymentForm from "./PaymentForm";
import Button from "../../common/Button";

const OrderFeedbackComponent = ({
  accountName,
  trackUrl,
  trackTitle,
  mediaType,
  onInputChange,
  onSubmitFeedback,
  saveCardInformation,
  shouldCreateToken,
  isPaymentFormReady,
  handleFeedbackChange,
  selectedFeedback,
  handleMediaTypeChange,
  handlePaymentFormError,
}) => {
  return (
    <div className="orderFeedbackContainer">
      <header className="orderFeedbackHeader">
        <IconComponent iconName="MenuIcon" className="menuIcon" />
        <IconComponent iconName="HearBKSilverLogo" className="silverLogo" />
      </header>
      <section className="orderFeedbackHeaderText">
        <div>
          <strong>{content.ORDER}</strong>
        </div>
        <div>{content.FEEDBACK}</div>
      </section>
      <section className="hitCampaignContainer">
        <div className="hitCampaignHeader">{content.HIT_CAMPAIGN_HEADER}</div>
        <div className="hitCampaignDescription">
          <p>{content.HIT_CAMPAIGN_DESCRIPTION}</p>
          <p>{content.HIT_CAMPAIGN_DESCRIPTION1}</p>
        </div>
      </section>
      <UploadTrackForm
        trackTitle={trackTitle}
        trackUrl={trackUrl}
        mediaType={mediaType}
        onInputChange={onInputChange}
        handleFeedbackChange={handleFeedbackChange}
        selectedFeedback={selectedFeedback}
        handleMediaTypeChange={handleMediaTypeChange}
      />
      <div className="addAnotherTrack" role="button">
        {content.ADD_ANOTHER_TRACK}
      </div>
      <UpgradeToPro onInputChange={onInputChange} />
      <TotalPaymentComponent onInputChange={onInputChange} />
      <StripeProvider apiKey="pk_test_HhCQqzIxD2wH7EXferZHg18W">
        <Elements>
          <PaymentForm
            accountName={accountName}
            submitPayment={saveCardInformation}
            shouldCreateToken={shouldCreateToken}
            handlePaymentFormError={handlePaymentFormError}
          />
        </Elements>
      </StripeProvider>
      <div className="orderButtonWrapper">
        <Button
          className="launchButton"
          buttonText={content.ORDER_NOW_BUTTON}
          onClick={onSubmitFeedback}
          disabled={!isPaymentFormReady}
        />
      </div>
    </div>
  );
};

export default OrderFeedbackComponent;
