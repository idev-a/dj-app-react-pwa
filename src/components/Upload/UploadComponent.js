import React, { useRef, useCallback, useState } from 'react';
import cx from "classnames";
import './upload.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as Help } from '../../assets/icon/help.svg';
import Button from './../../common/Button';
import InputField from './../../common/InputField/index';
import RatingContainer from './RatingContainer';
import GenresContainer from './GenresContainer/index';
import { StripeProvider, Elements } from "react-stripe-elements";
import { STRIPE_KEY } from "../../config";
import CardForm from './CardForm';
import Cards from './../UpgradeToPro/Cards/index';
import { ENUMS } from "../../utils";
import ResultContainer from "../../containers/Result/ResultContainer";

const UploadComponent = ({
    index = 0,
    genres = [],
    styles = [],
    setAddGenre,
    setAddStyle,
    tracks,
    promoCode,
    handleTrackChanges,
    onInputChange,
    paymentMethods,
    selectedPaymentId,
    handleSavedCardSelect,
    accountName,
    saveCardInformation,
    shouldCreateToken,
    handlePaymentFormError,
    isSaveCardDetails,
    onSubmitFeedback,
    userDetails,
}) => {
    const fileUploadEl = useRef(null);

    const [selectedContainer, setSelectedContainer] = useState(1);

    const selectedGenre = genres.find((g) => g._id === tracks ?.genreId);
    const selectedStyles = styles.find((g) => g._id === tracks ?.stylesId);

    genres.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    const handleUploadButtonClick = () => {
        handleTrackDetailsUpdate({ id: "mediaType", value: ENUMS.MEDIA_TYPE_FILEUPLOAD }, index);
        fileUploadEl.current.click();
    }

    const handleTrackDetailsUpdate = useCallback(
        (e) => {
            handleTrackChanges(e, index);
        },
        [index, handleTrackChanges]
    );

    const handleSelectedFeedback = useCallback((args) => {
        handleTrackDetailsUpdate({ id: "selectedFeedback", value: args }, index);
    }, [handleTrackDetailsUpdate, index]);

    const handleOnSelectContainer = useCallback((value) => {
        setSelectedContainer(value);
    }, []);

    return (
        <div className="upload-main-container">
            <div className="upload-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.UPLOAD}</span><br />
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">{userDetails.balance}</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.0</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="buttons-main-component">
                <Button
                    className={cx("unSelected-button",
                        selectedContainer === 1 && "selected-button"
                    )}
                    buttonText="Upload"
                    onClick={() => handleOnSelectContainer(1)}
                ></Button>
                <Button
                    className={cx("unSelected-button",
                        selectedContainer === 2 && "selected-button"
                    )}
                    buttonText="Results"
                    onClick={() => handleOnSelectContainer(2)}

                ></Button>
            </div>
            {selectedContainer === 1 && <section>
                <div className="submit-music-heading-container">
                    <span className="submit-music-queue-txt">{content.SUBMIT_MUSIC_QUEUE}</span>
                    {/* <Help /> */}
                </div>
                <div className="imput-container">
                    <small className="title-text">{content.TITLE}</small>
                    <InputField id="trackTitle"
                        value={tracks.trackTitle}
                        onChange={handleTrackDetailsUpdate}
                        className="tiitle-input-field"
                    />
                </div>
                <div className="upload-file-text-container">
                    <span className="upload-file-text">{content.UPLOAD_FILE}</span>
                </div>
                <div className="browse-file-container" onClick={handleUploadButtonClick}>
                    {tracks.fileUpload && <p className="file-name-text">{tracks.fileUpload.name}</p>}
                    <div className="browse-file-text-container"><span className="browse-text">{content.BROWSE}</span> <span className="file-text">{content.FILE}</span></div>
                </div>
                <input
                    accept=".mp3"
                    ref={fileUploadEl}
                    id="fileUpload"
                    type="file"
                    className="fileInput"
                    onChange={handleTrackDetailsUpdate}
                    placeholder={content.YOU_TUBE_LINK_PLACEHOLDER}
                />
                <p className="size-text">{content.SIZE}</p>
                <div className="or-text">OR</div>
                <div className="imput-container">
                    <small className="title-text">{content.YOUTUBE_LINK}</small>
                    <InputField
                        id="trackUrl"
                        onChange={handleTrackDetailsUpdate}
                        value={tracks.trackUrl}
                        className="tiitle-input-field"
                    />
                </div>
                <GenresContainer
                    selectedGenre={selectedGenre}
                    genres={genres}
                    setAddGenre={setAddGenre}
                    selectedStyles={selectedStyles}
                    styles={styles}
                    setAddStyle={setAddStyle}
                />
                <div className="imput-container">
                    <small className="title-text">{content.PROMO_CODE}</small>
                    <InputField
                        id="promoCode"
                        className="tiitle-input-field"
                        onChange={onInputChange}
                        value={promoCode}
                    />
                </div>
                <RatingContainer
                    tracks={tracks}
                    handleSelectedFeedback={handleSelectedFeedback}
                />
                <StripeProvider apiKey={STRIPE_KEY}>
                    <Elements>
                        <section>
                            <div className="payment-option-container">
                                <span className="payment-option-header-text">{content.PAYMENT_OPTIONS}</span>
                                {paymentMethods &&
                                    paymentMethods.length > 0 &&
                                    paymentMethods.map((method) => (
                                        <Cards
                                            {...method}
                                            selectedPaymentId={selectedPaymentId}
                                            handleSavedCardSelect={handleSavedCardSelect}
                                        />
                                    ))}
                            </div>
                            <span className="or-txt">OR</span>
                            <CardForm
                                onInputChange={onInputChange}
                                accountName={accountName}
                                submitPayment={saveCardInformation}
                                shouldCreateToken={shouldCreateToken}
                                handlePaymentFormError={handlePaymentFormError}
                                isSaveCardDetails={isSaveCardDetails}
                            />
                        </section>
                    </Elements>
                </StripeProvider>
                <Button
                    className="order-now-button"
                    buttonText={content.ORDER_NOW}
                    onClick={onSubmitFeedback}
                />
            </section>}
            {selectedContainer === 2 &&
                <ResultContainer />
            }
        </div>
    )
}

export default UploadComponent;