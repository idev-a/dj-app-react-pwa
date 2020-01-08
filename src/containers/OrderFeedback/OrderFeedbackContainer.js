import React, { useCallback, useState, useMemo } from "react";
import { connect } from "react-redux";
import Component from "../../components/OrderFeedback/OrderFeedbackComponent";
import {
  updateOrderData,
  submitPayment,
  uploadAudioFileToIPFS,
  updateTrackDetails,
  addAnotherTrack,
} from "../../state/actions/orderActions";
import { orderSelector } from "../../state/selectors/order";
import { ENUMS } from "../../utils";

const OrderFeedbackContainer = ({
  accountName,
  tracks,
  isSaveCardDetails,
  dispatchUpdate,
  dispatchTrackUpdate,
  dispatchAddNewTrack,
}) => {
  const [shouldCreateToken, setShouldCreateToken] = useState(false);
  const [isAddPremium, setAddPremium] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(true);
  const getTotalAmount = useCallback(() => {
    const amount = tracks.reduce((total, track) => {
      return total + track.selectedFeedback;
    }, 0);
    return amount;
  }, [tracks]);
  const validateFormData = useCallback(() => {
    const isFormError = tracks.some((track) => {
      if (track.trackTitle.length < 1) {
        return true;
      } else {
        if (track.mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD) {
          if (!track.fileUpload) {
            return true;
          } else {
            return track.trackUrl.length < 0;
          }
        }
      }
      return false;
    });
    return isFormError;
  }, [tracks]);
  const onSubmitPayment = useCallback(
    async (cardInfo) => {
      if (validateFormData()) {
        setIsError(true);
        return;
      }

      const tracksToUpload = tracks.map((track, index) => {
        delete track.fileToUpload;
        track.id = index;
        return track;
      });
      setIsProcessing(true);
      const payload = {
        tracks: tracksToUpload,
        saveCardDetails: isSaveCardDetails,
        amount: getTotalAmount(),
        currency: "USD",
        paymentToken: cardInfo.id,
        isAddPremium,
      };

      const response = await submitPayment(payload);
      if (response.ok) {
        const data = await response.json();
        await Promise.all(
          tracksToUpload.map(async ({ id, mediaType, fileUpload }) => {
            if (mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD) {
              const { feedbackId } = data.find((track) => track.trackId === id);
              const formData = new FormData();
              formData.append("trackUpload", fileUpload);
              const uploadFileResponse = await uploadAudioFileToIPFS(
                formData,
                feedbackId
              );
            }
          })
        );
      }
    },
    [tracks, getTotalAmount, validateFormData, isAddPremium, isSaveCardDetails]
  );

  const handleInputChange = useCallback(
    (e) => {
      let payload = {};
      if (e.target.name === "isAddPremium") {
        setAddPremium(e.target.checked);
      } else {
        if (e.target.name === "saveCardDetails") {
          payload = {
            [e.target.name]: e.target.checked,
          }
        } else {
          payload = {
            [e.target.id]: e.target.value,
          }
        }
        dispatchUpdate(payload);
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

  const handleTrackUpdates = useCallback(
    (e, index) => {
      if (e.id) {
        dispatchTrackUpdate(
          {
            [e.id]: e.value,
          },
          index
        );
      } else if (
        e.target.id === "fileUpload" &&
        e.target.files &&
        e.target.files.length > 0
      ) {
        dispatchTrackUpdate({ fileUpload: e.target.files[0] }, index);
      } else {
        dispatchTrackUpdate(
          {
            [e.target.id]: e.target.value,
          },
          index
        );
      }
    },
    [dispatchTrackUpdate]
  );

  const handlePaymentFormError = useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <Component
      accountName={accountName}
      tracks={tracks}
      isSaveCardDetails={isSaveCardDetails}
      shouldCreateToken={shouldCreateToken}
      onInputChange={handleInputChange}
      totalAmount={getTotalAmount}
      isAddPremium={isAddPremium}
      saveCardInformation={handleSaveCardChanges}
      onSubmitFeedback={handleOrderNowClick}
      handlePaymentFormError={handlePaymentFormError}
      handleTrackChanges={handleTrackUpdates}
      isPaymentFormReady={true}
      handleAddAnotherTrack={dispatchAddNewTrack}
    />
  );
};

const dispatchAction = (dispatch) => ({
  dispatchUpdate: (payload) => dispatch(updateOrderData(payload)),
  dispatchTrackUpdate: (payload, index) =>
    dispatch(updateTrackDetails(payload, index)),
  dispatchAddNewTrack: () => dispatch(addAnotherTrack()),
});

export default connect(
  orderSelector,
  dispatchAction
)(OrderFeedbackContainer);
