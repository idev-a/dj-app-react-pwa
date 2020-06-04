import React, { useRef, useCallback } from 'react';
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
}) => {
    const fileUploadEl = useRef(null);

    const selectedGenre = genres.find((g) => g._id === tracks ?.genreId);
    const selectedStyles = styles.find((g) => g._id === tracks ?.stylesId);

    genres.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    const handleUploadButtonClick = () => {
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

    return (
        <div className="upload-main-container">
            <div className="upload-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.UPLOAD}</span><br />
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">1.2</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.3</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="buttons-main-component">
                <Button
                    className="upload-button"
                    buttonText="Upload"
                ></Button>
                <Button
                    className="results-button"
                    buttonText="Results"
                ></Button>
            </div>
            <div className="submit-music-heading-container">
                <span className="submit-music-queue-txt">{content.SUBMIT_MUSIC_QUEUE}</span>
                <Help />
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
                    <CardForm />
                </Elements>
            </StripeProvider>
        </div>
    )
}

export default UploadComponent;