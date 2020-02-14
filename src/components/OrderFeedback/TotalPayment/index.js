import React from "react";
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";
import HearBKBalance from "../HearBKBalance";
import PaymentForm from "../PaymentForm";

const TrackPaymentDetails = ({
  trackTitle,
  trackGenre,
  amount,
  removePayment
}) => {
  return (
    <div className="trackPaymentComponent">
      <div className="trackDetails">
        <div className="trackTitle">{trackTitle}</div>
        {trackGenre && <div className="trackGenre">{trackGenre}</div>}
      </div>
      <div className="amountContainer">
        <div className="amount">
          {content.CURRENCY}
          {amount.toFixed(2)}
        </div>
        <Button
          className="cancelIcon"
          isIcon
          onClick={removePayment}
          iconName="cancel"
        />
      </div>
    </div>
  );
};

const TotalPaymentComponent = ({ 
  tracks, 
  handleRemoveTrack, 
  isAddPremium, 
  genres, 
  hitOrPro,
  onInputChange,
  accountName,
  submitPayment,
  shouldCreateToken,
  handlePaymentFormError,
  isSaveCardDetails,
  paymentMethods,
  selectedPaymentId,
  handleDeleteSavedCard,
  handleSavedCardSelect 
}) => {
  return (
    <div className="totalPaymentContainer">
      <div className="totalPaymentHeader">{content.TOTAL_PAY_TEXT}</div>
      <div className="trackPaymentContainer">
        {tracks.filter((t) => t.trackTitle.length > 0).map(t =>  <TrackPaymentDetails
          trackTitle={t.trackTitle}
          trackGenre={(t.genreId && (genres.find(g => g._id === t.genreId) || {}).name) || ""}
          amount={t.selectedFeedback}
          removePayment={() => handleRemoveTrack(t.index)}
        />)}
        {isAddPremium && (
          <TrackPaymentDetails
            trackTitle="Premium subscription / 1 year"
            amount={99}
            removePayment={() => handleRemoveTrack("premium")}
          />
        )}
      </div>
      <div className="totalAmountContainer">
        <div className="currency" style={hitOrPro === "pro" ? { color: "#49B97D" } : {}}>{content.CURRENCY}</div>
        <div className="amountContainer">
          <span className="amount" style={hitOrPro === "pro" ? { color: "#49B97D" } : {}}>
            {tracks.reduce((total, track) => {
              if (track.trackTitle.length > 0) {
                return total + track.selectedFeedback;
              }
              return total;
            }, 0) + (isAddPremium ? 99 : 0)}
          </span>
          <span className="decimalPart" style={hitOrPro === "pro" ? { color: "#49B97D" } : {}}>.00</span>
        </div>
      </div>
      {hitOrPro === "pro" && (
        <React.Fragment>
          <HearBKBalance />
          {/* <PaymentForm
            onInputChange={onInputChange}
            accountName={accountName}
            submitPayment={submitPayment}
            shouldCreateToken={shouldCreateToken}
            handlePaymentFormError={handlePaymentFormError}
            isSaveCardDetails={isSaveCardDetails}
            paymentMethods={paymentMethods}
            selectedPaymentId={selectedPaymentId}
            handleDeleteSavedCard={handleDeleteSavedCard}
            handleSavedCardSelect={handleSavedCardSelect}
          /> */}
          <div className="proOrderButtonWrapper">
            <Button 
              className="launchButton"
              buttonText={content.ORDER_NOW}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default TotalPaymentComponent;
