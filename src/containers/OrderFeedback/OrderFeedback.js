import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Component from "../../components/OrderFeedback/OrderFeedbackComponent";
import {
  updateOrderData,
  submitPayment,
  uploadAudioFileToIPFS,
} from "../../state/actions/orderActions";
import { orderSelector } from "../../state/selectors/order";
import { ENUMS } from "../../utils";

const OrderFeedbackContainer = ({
  trackTitle,
  trackUrl,
  mediaType,
  accountName,
  selectedFeedback,
  dispatchUpdate,
}) => {
  const [shouldCreateToken, setShouldCreateToken] = useState(false);
  const [isAddPremium, setAddPremium] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(false);
  const [isError, setIsError] = useState(true);
  const onSubmitPayment = useCallback(
    async (cardInfo) => {
      const payload = {
        trackTitle,
        mediaType,
        saveCardDetails: false,
        amount: selectedFeedback,
        currency: "USD",
        paymentToken: cardInfo.id,
      };
      if (mediaType === ENUMS.MEDIA_TYPE_YOUTUBE && trackUrl) {
        payload.trackUrl = trackUrl;
      }
      const response = await submitPayment(payload);
      if (response.ok) {
        if (mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD) {
          const { feedbackId } = await response.json();
          const formData = new FormData();
          formData.append("trackUpload", fileToUpload);
          const uploadFileResponse = await uploadAudioFileToIPFS(
            formData,
            feedbackId
          );
        }
      }
    },
    [selectedFeedback, trackTitle, trackUrl, mediaType, fileToUpload]
  );

  const handleInputChange = useCallback(
    (e) => {
      if (e.target.name === "isAddPremium") {
        setAddPremium(e.target.checked);
      }
      if (
        e.target.id === "fileUpload" &&
        e.target.files &&
        e.target.files.length > 0
      ) {
        setFileToUpload(e.target.files[0]);
      } else {
        dispatchUpdate({
          [e.target.id]: e.target.value,
        });
      }
    },
    [dispatchUpdate]
  );
  const handleSaveCardChanges = useCallback(
    (cardInfo) => {
      setShouldCreateToken(false);
      onSubmitPayment(cardInfo);
    },
    [onSubmitPayment]
  );

  const handleOrderNowClick = useCallback(() => {
    setShouldCreateToken(true);
  }, []);

  const handleFeedbackChange = useCallback(
    (args) => {
      dispatchUpdate({
        selectedFeedback: args,
      });
    },
    [dispatchUpdate]
  );

  const handlePaymentFormError = useCallback((e) => {
    if (!e.error) {
      setIsError(false);
    }
  }, []);

  const handleMediaTypeChange = useCallback(
    (args) => {
      dispatchUpdate({
        mediaType: args,
      });
    },
    [dispatchUpdate]
  );
  return (
    <Component
      accountName={accountName}
      trackTitle={trackTitle}
      trackUrl={trackUrl}
      selectedFeedback={selectedFeedback}
      mediaType={mediaType}
      shouldCreateToken={shouldCreateToken}
      onInputChange={handleInputChange}
      isAddPremium={isAddPremium}
      saveCardInformation={handleSaveCardChanges}
      onSubmitFeedback={handleOrderNowClick}
      handleFeedbackChange={handleFeedbackChange}
      handleMediaTypeChange={handleMediaTypeChange}
      handlePaymentFormError={handlePaymentFormError}
      isPaymentFormReady={true}
    />
  );
};

const dispatchAction = (dispatch) => ({
  dispatchUpdate: (payload) => dispatch(updateOrderData(payload)),
});

export default connect(
  orderSelector,
  dispatchAction
)(OrderFeedbackContainer);
