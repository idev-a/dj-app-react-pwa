import React, { useEffect, useCallback, useState } from 'react';
import { connect } from "react-redux";
import UploadComponent from './../../components/Upload/UploadComponent';
import { orderSelector } from "../../state/selectors/order";
import { getGenres, getStyles } from "../../state/actions/preferencesActions";
import {
    updateOrderData,
    submitPayment,
    uploadAudioFileToIPFS,
    updateTrackDetails,
} from "../../state/actions/orderActions";
import {
    getPaymentMethods,
    getUserDetails,
} from "../../state/actions/userActions";
import { toast } from "react-toastify";
import { ENUMS } from "../../utils";
import history from "../../history";

const UploadContainer = ({
    accountName,
    dispatchUpdate,
    dispatchGetGenres,
    getStylesDispatchAction,
    getPaymentMethodsDispatchAction,
    genres,
    styles,
    dispatchTrackUpdate,
    tracks,
    paymentMethods,
    isSaveCardDetails,
    getUserDetailsDispatchAction,
    userDetails,
}) => {
    const [promoCode, setPromoCode] = useState("");
    const [selectedPaymentId, setSelectedPaymentId] = useState(undefined);
    const [shouldCreateToken, setShouldCreateToken] = useState(false);
    const [isError, setIsError] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isUnSuccess, setIsUnSuccess] = useState(false);

    const getTotalAmount = useCallback(() => {
        const amount = tracks.reduce((total, track) => {
            return total + track.selectedFeedback;
        }, 0);
        return amount;
    }, [tracks]);

    useEffect(() => {
        window.scrollTo(0, 0);
        getUserDetailsDispatchAction();
        dispatchGetGenres();
        getStylesDispatchAction();
        getPaymentMethodsDispatchAction();
    }, [dispatchGetGenres, getPaymentMethodsDispatchAction, getStylesDispatchAction, getUserDetailsDispatchAction]);

    const setAddGenre = useCallback(
        (genre, index) => {
            dispatchTrackUpdate({ genreId: genre ?._id }, index);
        },
        [dispatchTrackUpdate]
    );

    const setAddStyle = useCallback(
        (styles, index) => {
            dispatchTrackUpdate({ stylesId: styles ?._id }, index);
        },
        [dispatchTrackUpdate]
    );

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

    const handleInputChange = useCallback(
        (e) => {
            let payload = {};
            if (e.target.id === "promoCode") {
                setPromoCode(e.target.value);
            } else {
                if (e.target.name === "saveCardDetails") {
                    payload = {
                        [e.target.name]: e.target.checked,
                    };
                } else {
                    payload = {
                        [e.target.id]: e.target.value,
                    };
                }
                dispatchUpdate(payload);
            }
        },
        [dispatchUpdate]
    );

    const validateFormData = useCallback(() => {
        const isFormError = tracks.some((track) => {
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
            if (
                promoCode.length === 0 &&
                    !cardInfo ?.paymentFromSavedCard &&
                    !(cardInfo && cardInfo.id && accountName.length > 0)
            ) {
                toast.error("Enter valid card details");
                return;
            }
            const tracksToUpload = tracks.map((track, index) => {
                delete track.fileToUpload;
                track.id = index;
                track.genreId = [track.genreId];
                track.stylesId = [track.stylesId];
                return track;
            });
            setIsProcessing(true);
            const payload = {
                tracks: tracksToUpload,
                saveCardDetails: isSaveCardDetails,
                amount: getTotalAmount(),
                currency: "USD",
                paymentToken: promoCode.length > 0 ? "PROMO_CODE" : cardInfo.id,
                isAddPremium: false,
                ...(cardInfo &&
                    cardInfo.paymentFromSavedCard && { paymentFromSaveCard: true }),
                ...(promoCode.length > 0 && { promoCode }),
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
                ).then(() => {
                    setIsProcessing(false);
                    setIsSuccess(true);
                });
            } else {
                setIsProcessing(false);
                setIsUnSuccess(true);
                toast.error("Payment failed. Please check your card details or promo code")
            }
        },
        [
            tracks,
            getTotalAmount,
            validateFormData,
            isSaveCardDetails,
            accountName,
            promoCode,
        ]
    );

    const handleSelectPayment = useCallback(
        (id) => {
            if (id === selectedPaymentId) {
                setSelectedPaymentId(undefined);
            } else {
                setSelectedPaymentId(id);
            }
        },
        [selectedPaymentId]
    );

    const handleSaveCardChanges = useCallback(
        (cardInfo) => {
            setShouldCreateToken(false);
            onSubmitPayment(cardInfo);
        },
        [onSubmitPayment]
    );

    const handlePaymentFormError = useCallback((e) => {
        console.log(e);
    }, []);

    const handleOrderNowClick = useCallback(() => {
        if (selectedPaymentId) {
            onSubmitPayment({ id: selectedPaymentId, paymentFromSavedCard: true });
        } else {
            setShouldCreateToken(true);
        }
    }, [onSubmitPayment, selectedPaymentId]);

    const handeOnCloseSuccessPopup = () => {
        setIsSuccess(false);
        history.push("/play")
    }

    return (
        <UploadComponent
            genres={genres}
            styles={styles}
            promoCode={promoCode}
            setAddGenre={setAddGenre}
            setAddStyle={setAddStyle}
            tracks={tracks[0]}
            handleTrackChanges={handleTrackUpdates}
            onInputChange={handleInputChange}
            paymentMethods={paymentMethods}
            selectedPaymentId={selectedPaymentId}
            handleSavedCardSelect={handleSelectPayment}
            accountName={accountName}
            saveCardInformation={handleSaveCardChanges}
            shouldCreateToken={shouldCreateToken}
            handlePaymentFormError={handlePaymentFormError}
            isSaveCardDetails={isSaveCardDetails}
            onSubmitFeedback={handleOrderNowClick}
            userDetails={userDetails}
            isProcessing={isProcessing}
            isSuccess={isSuccess}
            onCloseSucess={handeOnCloseSuccessPopup}
            isUnSuccess={isUnSuccess}
            onCloseUnSucess={() => setIsUnSuccess(false)}
        />
    )
}

const dispatchAction = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    dispatchUpdate: (payload) => dispatch(updateOrderData(payload)),
    dispatchGetGenres: () => dispatch(getGenres()),
    getStylesDispatchAction: () => dispatch(getStyles()),
    getPaymentMethodsDispatchAction: () => dispatch(getPaymentMethods()),
    dispatchTrackUpdate: (payload, index) =>
        dispatch(updateTrackDetails(payload, index)),
});

export default connect(
    orderSelector,
    dispatchAction
)(UploadContainer);