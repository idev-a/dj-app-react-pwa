import React, { useState, useRef, useCallback } from "react";
import cx from "classnames";
import "./styles.scss";
import content from "./content";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import IconComponent from "../../../common/IconComponent";
import { ENUMS } from "../../../utils";
const UploadTrackForm = ({
  trackTitle,
  trackUrl,
  mediaType,
  onInputChange,
  handleFeedbackChange,
  selectedFeedback,
  handleMediaTypeChange,
}) => {
  const fileUploadEl = useRef(null);
  const [mediaTypeState, setMediaTypeState] = useState(mediaType);
  const getFileUploadInputGroup = () => (
    <InputField
      accept=".mp3"
      passableRef={fileUploadEl}
      id="fileUpload"
      type="file"
      className="titleInput"
      value={trackUrl}
      onChange={onInputChange}
      placeholder={content.YOU_TUBE_LINK_PLACEHOLDER}
    />
  );
  const handleUploadFile = useCallback(() => {
    if (mediaTypeState === ENUMS.MEDIA_TYPE_YOUTUBE) {
      setMediaTypeState(ENUMS.MEDIA_TYPE_FILEUPLOAD);
      handleMediaTypeChange(ENUMS.MEDIA_TYPE_FILEUPLOAD);
      setTimeout(() => fileUploadEl.current.click(), 500);
    } else {
      setMediaTypeState(ENUMS.MEDIA_TYPE_YOUTUBE);
      handleMediaTypeChange(ENUMS.MEDIA_TYPE_YOUTUBE);
    }
  }, [mediaTypeState, handleMediaTypeChange]);
  return (
    <section className="uploadTrackFormContainer">
      <header className="uploadTrackHeaderContainer">
        <div className="uploadTrackHeaderText">
          {content.UPLOAD_TRACK_HEADER}
        </div>
        <div className="uploadTrackNumber">Track</div>
      </header>
      <div className="trackInputContainer">
        <label for="titleName" className="titleLabel">
          {content.TITLE_LABEL}
        </label>
        <InputField
          id="trackTitle"
          className="titleInput"
          value={trackTitle}
          onChange={onInputChange}
          placeholder={content.TITLE_INPUT_PLACEHOLDER}
        />
        <label for="trackUrl" className="titleLabel">
          {mediaTypeState === ENUMS.MEDIA_TYPE_YOUTUBE
            ? content.YOU_TUBE_LABEL
            : content.FILE_TO_UPLOAD_LABEL}
        </label>
        {mediaTypeState === ENUMS.MEDIA_TYPE_YOUTUBE ? (
          <InputField
            id="trackUrl"
            className="titleInput"
            value={trackUrl}
            onChange={onInputChange}
            placeholder={content.YOU_TUBE_LINK_PLACEHOLDER}
          />
        ) : (
          getFileUploadInputGroup()
        )}
      </div>
      <div className="orText">{content.OR}</div>
      <div className="buttonWrapper">
        <Button
          buttonText={
            mediaTypeState === ENUMS.MEDIA_TYPE_YOUTUBE
              ? content.UPLOAD_YOUR_TRACK
              : content.ADD_YOUTUBE_URL
          }
          onClick={handleUploadFile}
          className="uploadButton"
        />
      </div>
      <div className="metaInputContainer">
        <label for="trackGenre" className="titleLabel">
          {content.TRACK_GENRE_LABEL}
        </label>
        <InputField
          id="trackGenre"
          className="titleInput"
          value={trackTitle}
          onChange={onInputChange}
          placeholder={content.TRACK_GENRE_PLACEHOLDER}
        />
        <IconComponent className="addGenreIcon" iconName="addcircle" />
      </div>
      <div className="ratingsContainer">
        <div className="ratingsText">{content.RATINGS_TEXT}</div>
        <div className="ratingsButtonWrapper">
          <Button
            buttonText={content.RATINGS_TIER_10}
            className={cx(
              "ratingsButton",
              selectedFeedback === 1 && "isSelected"
            )}
            onClick={() => handleFeedbackChange(1)}
          />
          <Button
            buttonText={content.RATINGS_TIER_100}
            className={cx(
              "ratingsButton",
              selectedFeedback === 5 && "isSelected"
            )}
            onClick={() => handleFeedbackChange(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default UploadTrackForm;
