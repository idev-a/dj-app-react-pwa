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
import PopUpComponent from "../PopUps/PopUpsComponent";

const OrderFeedbackComponent = ({
  tracks,
  accountName,
  isAddPremium,
  onInputChange,
  onSubmitFeedback,
  saveCardInformation,
  shouldCreateToken,
  isPaymentFormReady,
  handleTrackChanges,
  handlePaymentFormError,
  handleAddAnotherTrack,
  isSaveCardDetails,
  setAddGenre,
  genresAddedArray,
  isProcessing,
  isSuccess,
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
      {tracks.map(
        ({ trackTitle, trackUrl, mediaType, selectedFeedback }, index) => (
          <UploadTrackForm
            index={index}
            trackTitle={trackTitle}
            trackUrl={trackUrl}
            mediaType={mediaType}
            handleTrackChanges={handleTrackChanges}
            selectedFeedback={selectedFeedback}
            setAddGenre={setAddGenre}
            genresAddedArray={genresAddedArray}
          
          />
        )
      )}
      <div className="addAnotherTrack" role="button" onClick={handleAddAnotherTrack}>
        {content.ADD_ANOTHER_TRACK}
      </div>
      <UpgradeToPro onInputChange={onInputChange} isAddPremium={isAddPremium} />
      <TotalPaymentComponent handleRemoveTrack={() => {}} tracks={tracks} isAddPremium={isAddPremium} />
      <StripeProvider apiKey="pk_test_HhCQqzIxD2wH7EXferZHg18W">
        <Elements>
          <PaymentForm
            onInputChange={onInputChange}
            accountName={accountName}
            submitPayment={saveCardInformation}
            shouldCreateToken={shouldCreateToken}
            handlePaymentFormError={handlePaymentFormError}
            isSaveCardDetails={isSaveCardDetails}
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
      {isProcessing && <PopUpComponent name="orderProcessing" hasCloseIcon={false}/>}
      {isSuccess && <PopUpComponent name="success" />}
    </div>
  );
};

export default OrderFeedbackComponent;
