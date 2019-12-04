import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import {
  fetchCardDetails,
  saveCardInformation,
  setFeedbackPrice,
  setSelectedMediaType,
  postPayment,
  setTrackUrl,
  uploadAudioFileToIPFS,
} from "../../actions";
import FeedbackComponent from "./FeedbackComponent";
import content from "./Feedback.content";

const FeedbackContainer = (props) => {
  const {
    feedbackPrice,
    cardInformation,
    token,
    email,
    trackUrl,
    selectedMediaType,
    saveCardInformationDispatch,
    setFeedbackPriceDispatch,
    fetchSavedCardDispatch,
    setSelectedMediaTypeDispatch,
    setTrackUrlDispatch,
  } = props;
  const [showMessagePopUp, setShowMessagePopUp] = useState(false);
  const [showCreditCardPopUp, setShowCreditPopUp] = useState(false);
  const [messageContent, setMessageContent] = useState({});
  const [uploadFile, setUploadFile] = useState(undefined);

  const handleShowMessagePopUp = useCallback((value) => {
    setShowMessagePopUp(value);
  }, []);

  const handleShowCreditCardPopUp = useCallback((value) => {
    setShowCreditPopUp(value);
  }, []);

  const handleTrackUrlChange = (event) => {
    setTrackUrlDispatch(event.target.value);
  };

  const handleFileUpload = (e) => {
      debugger;
      if (e.target.files && e.target.files.length > 0) {
          setUploadFile(e.target.files[0]);
      }
  };

  const saveCardInformation = (cardInfo) => {
    saveCardInformationDispatch(cardInfo);
    handleShowCreditCardPopUp(false);
  };

  const validateForm = () => {
    if (selectedMediaType === content.MEDIA_TYPE_YOUTUBE) {
      if (!trackUrl) {
        setMessageContent(content.MESSAGE_MISSING_TRACKURL);
        return false;
      }
    } else {
      if (!uploadFile) {
        setMessageContent(content.MESSAGE_MISSING_UPLOAD_FILE);
        return false;
      }
    }
    const paymentToken = cardInformation.id;
    const last4Digits = cardInformation.card && cardInformation.card.last4;
    if (!paymentToken || !last4Digits) {
      setMessageContent(content.MESSAGE_CARD_NOT_FOUND);
      return false;
    }
    return true;
  };

  const submitPayment = async () => {
    if (validateForm()) {
      const paymentToken = cardInformation.id;
      const exiting = false;
      const last4Digits = cardInformation.card && cardInformation.card.last4;
      const reqBody = {
        email,
        trackId: selectedMediaType === content.MEDIA_TYPE_YOUTUBE ? trackUrl : "IPFS Update",
        paymentToken,
        type: feedbackPrice,
        last4Digits,
        exiting,
        mediaType: selectedMediaType,
      };
      const response = await postPayment(reqBody, token);
      if (response.status === 201) {
        if (selectedMediaType === content.MEDIA_TYPE_UPLOAD) {
            const resData = await response.json();
            const formData = new FormData();
            formData.append('file-to-upload', uploadFile);
            const uploadResponse = await uploadAudioFileToIPFS(formData,resData.feedbackId);
            if (uploadResponse.ok) {
                setMessageContent(content.MESSAGE_PAYMENT_SUCCESS);
            }
        } else {
          setMessageContent(content.MESSAGE_PAYMENT_SUCCESS);
        }
      } else {
        setMessageContent(content.MESSAGE_PAYMENT_FAILURE);
      }
    }
    setShowMessagePopUp(true);
    setTimeout(() => setShowMessagePopUp(false), 10000);
  };

  useEffect(() => {
    if (token) {
      fetchSavedCardDispatch(token);
    }
  }, [fetchSavedCardDispatch, token]);

  return (
    <FeedbackComponent
      showCreditCardPopUp={showCreditCardPopUp}
      showMessagePopUp={showMessagePopUp}
      trackUrl={trackUrl}
      selectedMediaType={selectedMediaType}
      feedbackPrice={feedbackPrice}
      cardInformation={cardInformation}
      handleShowCreditCardPopUp={handleShowCreditCardPopUp}
      saveCardInformation={saveCardInformation}
      setFeedbackPrice={setFeedbackPriceDispatch}
      setSelectedMediaType={setSelectedMediaTypeDispatch}
      submitPayment={submitPayment}
      handleShowMessagePopUp={handleShowMessagePopUp}
      handleTrackUrlChange={handleTrackUrlChange}
      messageContent={messageContent}
      handleFileUpload={handleFileUpload}
    />
  );
};

const dispatchActions = (dispatch) => ({
  fetchSavedCardDispatch: (token) => dispatch(fetchCardDetails(token)),
  saveCardInformationDispatch: (cardInfo) =>
    dispatch(saveCardInformation(cardInfo)),
  setFeedbackPriceDispatch: (feedbackCode) =>
    dispatch(setFeedbackPrice(feedbackCode)),
  setSelectedMediaTypeDispatch: (mediaType) =>
    dispatch(setSelectedMediaType(mediaType)),
  setTrackUrlDispatch: (trackUrl) => dispatch(setTrackUrl(trackUrl)),
});

const mapStateToProps = (state) => ({
  savedCard: state.user.savedCard,
  cardInformation: state.user.cardInformation,
  selectedCard: state.user.selectedCard,
  selectedMediaType: state.user.selectedMediaType,
  feedbackPrice: state.user.feedbackPrice,
  trackUrl: state.user.trackUrl,
  token: state.auth.user.token,
  email: state.auth.user.email,
});

export default connect(
  mapStateToProps,
  dispatchActions
)(FeedbackContainer);
