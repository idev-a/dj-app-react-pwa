import React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import IconComponent from "../../common/IconComponent";
import content from "./content";
import "./styles.scss";
import UploadTrackForm from "./UploadTrackForm";
import UpgradeToPremium from "./UpgradeToPremium";
import TotalPaymentComponent from "./TotalPayment";
import PaymentForm from "./PaymentForm";
import Button from "../../common/Button";
import PopUpComponent from "../PopUps/PopUpsComponent";

const OrderFeedbackComponent = ({
  tracks,
  accountName,
  genres,
  selectedGenre,
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
  isProcessing,
  isSuccess,
  handleRemoveTrack,
  handleLogoClick,
  handleRateTrackClick,
  handlePlaceNewOrderClick,
  closeSuccessPopUp,
}) => {
  return (
    <div className="orderFeedbackContainer">
      <header className="orderFeedbackHeader">
        <Button
          isIcon
          iconName="HearBKSilverLogo"
          className="silverLogo"
          onClick={handleLogoClick}
        />
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
        (
          { trackTitle, trackUrl, mediaType, selectedFeedback, genreId },
          index
        ) => (
          <UploadTrackForm
            index={index}
            genres={genres}
            trackTitle={trackTitle}
            trackUrl={trackUrl}
            mediaType={mediaType}
            handleTrackChanges={handleTrackChanges}
            selectedFeedback={selectedFeedback}
            setAddGenre={setAddGenre}
            selectedGenre={genres.find((g) => g._id === genreId)}
          />
        )
      )}
      <div
        className="addAnotherTrack"
        role="button"
        onClick={handleAddAnotherTrack}
      >
        {content.ADD_ANOTHER_TRACK}
      </div>
      <UpgradeToPremium
        onInputChange={onInputChange}
        isAddPremium={isAddPremium}
      />
      <TotalPaymentComponent
        handleRemoveTrack={handleRemoveTrack}
        tracks={tracks}
        isAddPremium={isAddPremium}
        genres={genres}
      />
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
      {isProcessing && (
        <PopUpComponent name="orderProcessing" hasCloseIcon={false} />
      )}
      {isSuccess && (
        <PopUpComponent
          name="success"
          handlers={{
            rateTrackClick: handleRateTrackClick,
            placeNewOrderClick: handlePlaceNewOrderClick,
          }}
          closeClick={closeSuccessPopUp}
        />
      )}
    </div>
  );
};

export default OrderFeedbackComponent;
