import React, { useRef, useState, useCallback } from 'react';
import './upload.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as Help } from '../../assets/icon/help.svg';
import { ReactComponent as PlusIcon } from '../../assets/icon/IconPlusSquare.svg';
import { ReactComponent as MinusIcon } from '../../assets/icon/IconMinusSquare.svg';
import { ReactComponent as IconPlusCircle } from '../../assets/icon/Icon feather-plus-circle.svg'
import { ReactComponent as IconCloseCircle } from '../../assets/icon/Icon feather-close-circle.svg'
import Button from './../../common/Button';
import InputField from './../../common/InputField/index';

const UploadComponent = ({
    index = 0,
    genres = [],
    setAddGenre,
    tracks,
    handleTrackChanges,
}) => {
    const fileUploadEl = useRef(null);
    const [addGenres, setAddGenres] = useState(false);

    const selectedGenre = genres.find((g) => g._id === tracks?.genreId);

    const handleOnToggleGenres = useCallback(() => {
        setAddGenres(!addGenres);
    }, [setAddGenres, addGenres])

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
            <div className="title-container">
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
            <div className="title-container">
                <small className="title-text">{content.YOUTUBE_LINK}</small>
                <InputField className="tiitle-input-field" />
            </div>
            <div className="genres-container">
                <span className="genres-label">{content.GENRES_STYLES}</span>
                <div className="search-genres-container">
                    <InputField
                        id="genres"
                        className="formInputField"
                        // onChange={onInputChange}
                        placeholder={content.SEARCH_GENRES}
                    />
                    <div className="icon-container" onClick={handleOnToggleGenres}>
                        {addGenres ? <MinusIcon /> : <PlusIcon />}
                    </div>
                </div>
                <div className="genres-button-container">
                    {selectedGenre && <div className="genres-added-button">
                        {selectedGenre.name}
                        <div className="icon-plus-circle"/*  onClick={(e) => handleClickAddGenres(element, true)} */ ><IconCloseCircle /></div>
                    </div>}
                </div>
                <div className="genres-button-container">
                    {(genres.length > 0 && addGenres) && genres.map(element => {
                        return <div className="genres-button">
                            {element.name}
                            <div className="icon-plus-circle" onClick={() => setAddGenre(element, 0)} ><IconPlusCircle /></div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default UploadComponent;