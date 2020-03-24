import React, { useContext } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import content from "./content";
import "./styles.scss";
import UploadTrackForm from "../OrderFeedback/UploadTrackForm";
import TotalPaymentComponent from "../OrderFeedback/TotalPayment";
import PaymentForm from "../OrderFeedback/PaymentForm";
import Button from "../../common/Button";
import PopUpComponent from "../PopUps/PopUpsComponent";
import SelectedListeners from "./SelectedListeners";
import { MenuHandlerContext } from "../../routes";

const ProFeedbackComponent = ({
  tracks,
  accountName,
  genres,
  selectedPaymentId,
  handleDeleteSavedCard,
  selectedListeners,
  handleSavedCardSelect,
  paymentMethods,
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
  onSelectListeners,
  handleSelectedListeners
}) => {
  const handleMenuClick = useContext(MenuHandlerContext);
  return (
    <div className="orderFeedbackContainer">
      <header className="orderFeedbackHeader">
        <Button
          isIcon
          className="menuIcon"
          iconName="menu"
          onClick={handleMenuClick}
        />
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
        <div className="hitCampaignHeader">{content.PRO_CAMPAIGN_HEADER}</div>
        <div className="hitCampaignDescription">
          <p>{content.PRO_CAMPAIGN_DESCRIPTION}</p>
          <p
            dangerouslySetInnerHTML={{
              __html: content.PRO_CAMPAIGN_DESCRIPTION1
            }}
          ></p>
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
            selectedGenre={genres.find(g => g._id === genreId)}
            feedbackType="PRO"
          />
        )
      )}

      <SelectedListeners
        onSelectListeners={onSelectListeners}
        listeners={selectedListeners}
        handleListenerSelect={handleSelectedListeners}
      />
      <div className="proContainer">
        <TotalPaymentComponent
          handleRemoveTrack={handleRemoveTrack}
          tracks={tracks}
          isAddPremium={isAddPremium}
          genres={genres}
          feedbackType="PRO"
          selectedListeners={selectedListeners}
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
              paymentMethods={paymentMethods}
              selectedPaymentId={selectedPaymentId}
              handleDeleteSavedCard={handleDeleteSavedCard}
              handleSavedCardSelect={handleSavedCardSelect}
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
      {isProcessing && (
        <PopUpComponent name="orderProcessing" hasCloseIcon={false} />
      )}
      {isSuccess && (
        <PopUpComponent
          name="success"
          handlers={{
            rateTrackClick: handleRateTrackClick,
            placeNewOrderClick: handlePlaceNewOrderClick
          }}
          closeClick={closeSuccessPopUp}
        />
      )}
    </div>
  );
};

export default ProFeedbackComponent;
