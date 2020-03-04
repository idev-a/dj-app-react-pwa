import React from "react";
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";

const getTotalPayment = (tracks, isAddPremium) =>
  tracks.reduce((total, track) => {
    if (track.trackTitle.length > 0) {
      return total + track.selectedFeedback;
    }
    return total;
  }, 0) + (isAddPremium ? 99 : 0);

const getTotalProPayment = listeners =>
  listeners.reduce((total, listener) => total + parseInt(listener.price), 0);

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
  feedbackType,
  selectedListeners
}) => {
  const getTotal = () => {
    if (feedbackType === "PRO") {
      return getTotalProPayment(selectedListeners);
    }
    return getTotalPayment(tracks, isAddPremium);
  };
  return (
    <div className="totalPaymentContainer">
      <div className="totalPaymentHeader">{content.TOTAL_PAY_TEXT}</div>
      <div className="trackPaymentContainer">
        {feedbackType !== "PRO" &&
          tracks
            .filter(t => t.trackTitle.length > 0)
            .map(t => (
              <TrackPaymentDetails
                trackTitle={t.trackTitle}
                trackGenre={
                  (t.genreId &&
                    (genres.find(g => g._id === t.genreId) || {}).name) ||
                  ""
                }
                amount={t.selectedFeedback}
                removePayment={() => handleRemoveTrack(t.index)}
              />
            ))}
        {feedbackType === "PRO" &&
          selectedListeners.map(l => (
            <TrackPaymentDetails
              trackTitle={l.display_name}
              amount={parseInt(l.price)}
              removePayment={() => {}}
            />
          ))}
        {isAddPremium && (
          <TrackPaymentDetails
            trackTitle="Premium subscription / 1 year"
            amount={99}
            removePayment={() => handleRemoveTrack("premium")}
          />
        )}
      </div>
      <div className="totalAmountContainer">
        <div
          className="currency"
          style={feedbackType === "PRO" ? { color: "#49B97D" } : {}}
        >
          {content.CURRENCY}
        </div>
        <div className="amountContainer">
          <span
            className="amount"
            style={feedbackType === "PRO" ? { color: "#49B97D" } : {}}
          >
            {getTotal()}
          </span>
          <span
            className="decimalPart"
            style={feedbackType === "PRO" ? { color: "#49B97D" } : {}}
          >
            .00
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalPaymentComponent;
