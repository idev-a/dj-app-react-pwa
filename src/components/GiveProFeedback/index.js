import React, { useContext } from "react";
import moment from "moment";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";

import "./styles.scss";
import content from "./content";
import Icon from "../../common/IconComponent";
import { ENUMS } from "../../utils";
import Iframe from "../../common/Iframe";
import AudioPlayer from "../AudioPlayer";
import TextArea from "../../common/TextAreaField";
import Button from "../../common/Button";
import { MenuHandlerContext } from "../../routes";

import "rc-slider/assets/index.css";
import "rc-tooltip/assets/bootstrap.css";

const Handle = Slider.Handle;

const handle = props => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const GiveProFeedback = ({
  track = {},
  showNoMoreTracks,
  handleFeedbackChange,
  feedback,
  trackRating,
  handleTrackRating,
  handleSubmitProFeedback
}) => {
  const handleMenuClick = useContext(MenuHandlerContext);
  const {
    trackTitle,
    mediaType,
    profile_image,
    price,
    user_name,
    requestedOn,
    trackUrl
  } = track;
  const getMediaComponent = () => {
    return mediaType === ENUMS.MEDIA_TYPE_YOUTUBE ? (
      <Iframe
        width=""
        height=""
        className="discoverIFrame"
        src={trackUrl}
        title="video-iframe"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    ) : (
      <AudioPlayer src={trackUrl} />
    );
  };
  return (
    <div className="giveProFeedbackContainer">
      <header className="giveProFeedbackHeader">
        <Button
          isIcon
          className="menuIcon"
          iconName="menu_white"
          onClick={handleMenuClick}
        />
        {/* <Icon className="alertIcon" iconName="alert_white" /> */}
        <div className="title1">{content.TITLE_1}</div>
        <div className="title2">{content.TITLE_2}</div>
      </header>
      {!showNoMoreTracks ? (
        <>
          <section className="songCardOuterContainer">
            <div className="songCardContainer">
              <div className="profilePicIconContainer">
                {profile_image ? (
                  <img
                    alt="profileImg"
                    className="profilePicIcon"
                    src={profile_image}
                  />
                ) : (
                  <Icon
                    className="defaultProfilePicIcon"
                    iconName="default_pro_pic_icon"
                  />
                )}
              </div>
              <div className="artistTagContainer">{`@${user_name}`}</div>
              <div className="requestedContainer">
                {content.REQUESTED}&nbsp;
                {moment(requestedOn).format("MM/DD/YYYY")}
              </div>
              <div className="songContainer">
                {getMediaComponent()}
                <div className="songTitle">{trackTitle}</div>
                {/* <div className="trackDescriptionLabel">
                  {content.TRACK_DESCRIPTION_LABEL}
                </div>
                <div className="trackDescriptionContainer">
                  {content.TRACK_DESCRIPTION_CONTENT}
                </div> */}
              </div>
              <div className="trackRatingContainer">
                <div className="trackRatingLabel">
                  {content.TRACK_RATING_LABEL}
                </div>
                <div className="ratingContainer">
                  <Slider
                    min={0}
                    max={10}
                    defaultValue={0}
                    handle={handle}
                    className="ratingColor"
                    onChange={handleTrackRating}
                  />
                </div>
                <div className="feedbackLabel">{content.FEEDBACK_LABEL}</div>
                <div className="textAreaContainer">
                  <TextArea
                    rows="5"
                    id="feedback-area"
                    className="feedbackTextArea"
                    placeholder={content.FEEDBACK_TEXTAREA_PLACEHOLDER}
                    onChange={handleFeedbackChange}
                    value={feedback}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="buttonContainerBorder">
            <div className="buttonContainer">
              {/* <span className="buttonLabel">{content.SUBMIT_FOR}</span>
              <span className="buttonLabelGreen">&nbsp;`${price}</span> */}
              <Button
                className="submitButton"
                onClick={handleSubmitProFeedback}
                buttonText={`${content.SUBMIT_FOR} $${price}`}
              />
            </div>
          </section>
        </>
      ) : (
        <h3 style={{ color: "#FFF" }}>
          No more tracks to rate. Please come back later
        </h3>
      )}
    </div>
  );
};

GiveProFeedback.defaultProps = {
  track: {}
};

export default GiveProFeedback;
