import React, { useCallback, useState, useEffect } from "react";
import without from "lodash/without";
import { connect } from "react-redux";
import Component from "../../components/ProFeedback/ProFeedbackComponent";
import {
  updateOrderData,
  submitPayment,
  uploadAudioFileToIPFS,
  updateTrackDetails,
  addAnotherTrack,
  removeTrack,
  resetState
} from "../../state/actions/orderActions";
import { proFeedbackSelector } from "../../state/selectors/order";
import { ENUMS } from "../../utils";
import { getGenres, getTags } from "../../state/actions/preferencesActions";
import { toast } from "react-toastify";
import {
  getPaymentMethods,
  deletePaymentMethod
} from "../../state/actions/userActions";
import ListenersSelect from "../../components/ProFeedback/ListenersSelect";
import { searchListeners } from "../../state/actions/searchActions";

const ProFeedbackContainer = ({
  accountName,
  tracks,
  genres,
  tags,
  paymentMethods,
  isSaveCardDetails,
  dispatchUpdate,
  dispatchTrackUpdate,
  dispatchAddNewTrack,
  dispatchGetGenres,
  dispatchRemoveTrack,
  history,
  searchListeners,
  dispatchResetState,
  getPaymentMethodsDispatchAction,
  deletePaymentMethodDispatchAction,
  postSearchListenersDispatchAction,
  getTagsDispatchAction
}) => {
  const [shouldCreateToken, setShouldCreateToken] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState(undefined);
  const [showListenersSelection, setShowListenersSelection] = useState(false);
  const [selectedListeners, setSelectedListeners] = useState(
    history.location.state ? [history.location.state] : []
  );
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("x-access-token")) {
      history && history.push("/signin");
    }
    if (localStorage.getItem("isFirstUserLogin")) {
      history && history.push("/preferences");
    }
  }, [history]);

  useEffect(() => {
    dispatchGetGenres();
    getTagsDispatchAction();
    getPaymentMethodsDispatchAction();
    postSearchListenersDispatchAction("");
  }, [
    dispatchGetGenres,
    getPaymentMethodsDispatchAction,
    getTagsDispatchAction,
    postSearchListenersDispatchAction
  ]);

  useEffect(() => {
    postSearchListenersDispatchAction(searchValue);
  }, [searchValue, postSearchListenersDispatchAction]);

  const handleSearchValueChange = useCallback(e => {
    setSearchValue(e.target.value);
  }, []);

  const getTotalAmount = useCallback(() => {
    const amount = selectedListeners.reduce((total, listener) => {
      return total + parseInt(listener.price);
    }, 0);
    return amount;
  }, [selectedListeners]);

  const validateFormData = useCallback(() => {
    const isFormError = tracks.some(track => {
      if (track.trackTitle.length < 1) {
        toast.error("Enter track title");
        return true;
      }
      if (!track.genreId) {
        toast.error("Select a genre for the tracks");
        return true;
      }
      if (track.mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD) {
        if (!track.fileUpload) {
          toast.error("Upload your mp3 file");
          return true;
        }
      }
      if (track.mediaType === ENUMS.MEDIA_TYPE_YOUTUBE) {
        if (track.trackUrl.length === 0) {
          toast.error("Enter YouTube url");
        }
        return track.trackUrl.length === 0;
      }
      if (selectedListeners.length < 0) {
        toast.error(" Please select a listener !!");
        return true;
      }
      return false;
    });
    return isFormError;
  }, [tracks, selectedListeners]);

  const onSubmitPayment = useCallback(
    async cardInfo => {
      if (validateFormData()) {
        return;
      }
      if (
        !cardInfo.paymentFromSavedCard &&
        !(cardInfo && cardInfo.id && accountName.length > 0)
      ) {
        toast.error("Enter valid card details");
        return;
      }
      const tracksToUpload = tracks.map((track, index) => {
        delete track.fileToUpload;
        track.id = index;
        track.genreId = [track.genreId];
        return track;
      });
      setIsProcessing(true);
      const payload = {
        tracks: tracksToUpload,
        saveCardDetails: isSaveCardDetails,
        amount: getTotalAmount(),
        currency: "USD",
        paymentToken: cardInfo.id,
        listeners: selectedListeners.map(l => ({
          id: l._id,
          price: parseInt(l.price)
        })),
        ...(cardInfo &&
          cardInfo.paymentFromSavedCard && { paymentFromSaveCard: true })
      };

      const response = await submitPayment(payload, true);
      if (response.ok) {
        const data = await response.json();
        await Promise.all(
          tracksToUpload.map(async ({ id, mediaType, fileUpload }) => {
            if (mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD) {
              const { feedbackId } = data.find(track => track.trackId === id);
              const formData = new FormData();
              formData.append("trackUpload", fileUpload);
              const uploadFileResponse = await uploadAudioFileToIPFS(
                formData,
                feedbackId,
                true
              );
            }
          })
        ).then(() => {
          setIsProcessing(false);
          setIsSuccess(true);
        });
      } else {
        setIsProcessing(false);
        toast.error(
          "Payment failed. Please check your card details or promo code"
        );
      }
    },
    [
      tracks,
      getTotalAmount,
      validateFormData,
      isSaveCardDetails,
      accountName,
      selectedListeners
    ]
  );

  const handleSelectedListener = useCallback(
    (listener, e) => {
      if (e.target.checked) {
        setSelectedListeners([...selectedListeners, listener]);
      } else {
        setSelectedListeners(l => {
          return without(selectedListeners, l => {
            return listener._id === l.id;
          });
        });
      }
    },
    [selectedListeners]
  );

  const handleInputChange = useCallback(
    e => {
      let payload = {};
      if (e.target.name === "saveCardDetails") {
        payload = {
          [e.target.name]: e.target.checked
        };
      } else {
        payload = {
          [e.target.id]: e.target.value
        };
      }
      dispatchUpdate(payload);
    },
    [dispatchUpdate]
  );

  const handleSaveCardChanges = useCallback(
    cardInfo => {
      setShouldCreateToken(false);
      onSubmitPayment(cardInfo);
    },
    [onSubmitPayment]
  );

  const handleOrderNowClick = useCallback(() => {
    if (selectedPaymentId) {
      onSubmitPayment({ id: selectedPaymentId, paymentFromSavedCard: true });
    } else {
      setShouldCreateToken(true);
    }
  }, [onSubmitPayment, selectedPaymentId]);

  const handleTrackUpdates = useCallback(
    (e, index) => {
      if (e.id) {
        dispatchTrackUpdate(
          {
            [e.id]: e.value
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
            [e.target.id]: e.target.value
          },
          index
        );
      }
    },
    [dispatchTrackUpdate]
  );

  const handlePaymentFormError = useCallback(e => {
    console.log(e);
  }, []);

  const setAddGenre = useCallback(
    (genre, index) => {
      dispatchTrackUpdate({ genreId: genre._id }, index);
    },
    [dispatchTrackUpdate]
  );

  const handleRemoveTrack = useCallback(
    id => {
      dispatchRemoveTrack(id);
    },
    [dispatchRemoveTrack]
  );

  const handleDeleteSavedCard = useCallback(
    paymentId => {
      deletePaymentMethodDispatchAction({ id: paymentId });
      setSelectedPaymentId(undefined);
    },
    [deletePaymentMethodDispatchAction]
  );

  const handleSelectPayment = useCallback(
    id => {
      if (id === selectedPaymentId) {
        setSelectedPaymentId(undefined);
      } else {
        setSelectedPaymentId(id);
      }
    },
    [selectedPaymentId]
  );

  const handleRemoveListener = useCallback(id => {
    setSelectedListeners(l => l.filter(listener => listener._id !== id));
  }, []);

  return !showListenersSelection ? (
    <Component
      isProcessing={isProcessing}
      selectedPaymentId={selectedPaymentId}
      handleDeleteSavedCard={handleDeleteSavedCard}
      handleSavedCardSelect={handleSelectPayment}
      selectedListeners={selectedListeners}
      genres={genres}
      isSuccess={isSuccess}
      accountName={accountName}
      paymentMethods={paymentMethods}
      tracks={tracks}
      isSaveCardDetails={isSaveCardDetails}
      shouldCreateToken={shouldCreateToken}
      onInputChange={handleInputChange}
      totalAmount={getTotalAmount}
      saveCardInformation={handleSaveCardChanges}
      onSubmitFeedback={handleOrderNowClick}
      handlePaymentFormError={handlePaymentFormError}
      handleTrackChanges={handleTrackUpdates}
      isPaymentFormReady={true}
      handleAddAnotherTrack={dispatchAddNewTrack}
      setAddGenre={setAddGenre}
      onSelectListeners={() => setShowListenersSelection(true)}
      handleRemoveTrack={handleRemoveTrack}
      handleLogoClick={() => history.push("/")}
      handleSelectedListeners={handleSelectedListener}
      handleRateTrackClick={() => {
        history.push("/discover");
        setIsSuccess(false);
      }}
      handlePlaceNewOrderClick={() => {
        dispatchResetState();
        setIsSuccess(false);
      }}
      closeSuccessPopUp={() => setIsSuccess(false)}
      handleRemoveListener={handleRemoveListener}
    />
  ) : (
    <ListenersSelect
      handleSearchValueChange={handleSearchValueChange}
      searchListeners={searchListeners}
      searchValue={searchValue}
      handleListenerSelect={() =>
        setShowListenersSelection(!showListenersSelection)
      }
      tagsArray={tags}
      handleSelectedListener={handleSelectedListener}
    />
  );
};

const dispatchAction = dispatch => ({
  dispatchUpdate: payload => dispatch(updateOrderData(payload)),
  dispatchTrackUpdate: (payload, index) =>
    dispatch(updateTrackDetails(payload, index)),
  dispatchAddNewTrack: () => dispatch(addAnotherTrack()),
  dispatchGetGenres: () => dispatch(getGenres()),
  dispatchRemoveTrack: id => dispatch(removeTrack(id)),
  dispatchResetState: () => dispatch(resetState()),
  getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
  deletePaymentMethodDispatchAction: payload =>
    dispatch(deletePaymentMethod(payload)),
  postSearchListenersDispatchAction: searchQuery =>
    dispatch(searchListeners(searchQuery)),
  getTagsDispatchAction: () => dispatch(getTags())
});

export default connect(
  proFeedbackSelector,
  dispatchAction
)(ProFeedbackContainer);
