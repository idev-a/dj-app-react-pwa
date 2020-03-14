import React, { useState } from "react";
import content from "./content";
import "./Card.styles.scss";
import Icon from "../../../../../common/IconComponent";
import TextArea from "../../../../../common/TextAreaField";
import Button from "../../../../../common/Button";
import moment from "moment";
import { Rate } from "antd";
import { toast } from "react-toastify";
import { ENUMS } from "../../../../../utils";

const Card = ({ cardData, handleTrackReviewFeedback }) => {
  const [headerIsOpen, setHeaderIsOpen] = useState(false);
  const [bodyIsOpen, setBodyIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseTimeRating, setResponseTimeRaing] = useState(
    cardData?.ratings?.responseTime || 0
  );
  const [serviceRating, setServiceRating] = useState(
    cardData?.ratings?.serviceRating || 0
  );
  const [recommendedRating, setRecommendedRating] = useState(
    cardData?.ratings?.recommend || 0
  );
  const [feedbackForListener, setFeedbackForListener] = useState(
    cardData?.ratings?.comments || ""
  );

  const avgRating =
    (responseTimeRating + serviceRating + recommendedRating) / 3;

  const handleSubmitFeedback = () => {
    const { feedbackId, listenerId } = cardData;
    if (feedbackForListener.length === 0) {
      toast.error("Enter feedback for listener.");
      return;
    }
    if (responseTimeRating === 0) {
      toast.error("Rate response time for listener.");
      return;
    }
    if (serviceRating === 0) {
      toast.error("Rate service for listener.");
      return;
    }
    if (recommendedRating === 0) {
      toast.error("Rate recommendation for listener.");
      return;
    }
    const payload = {
      responseTime: responseTimeRating,
      recommend: recommendedRating,
      service: serviceRating,
      comments: feedbackForListener,
      feedbackId,
      listenerId
    };
    handleTrackReviewFeedback(payload);
  };
  return (
    <div className="bigWrapper">
      <div className="ratingIconWrapper">{cardData?.trackRating}</div>
      <div className="reviewSubContainers">
        <div
          onClick={() => {
            setHeaderIsOpen(!headerIsOpen);
            setBodyIsOpen(false);
          }}
          className="subContainerHeader"
        >
          <span className="expandIcon">{!headerIsOpen ? "+" : "-"}</span>
          <Icon
            className="trackIcon"
            iconName={
              cardData?.mediaType === ENUMS.MEDIA_TYPE_FILEUPLOAD
                ? "musical_note"
                : "video_camera"
            }
          />
          <div className="reviewHeaderContainer">
            <div className="trackTitle">{cardData?.trackTitle}</div>
            <div className="trackDate">
              {moment(cardData?.submittedOn).format("MM/DD/YYYY")}
            </div>
          </div>
        </div>
        {headerIsOpen && (
          <React.Fragment>
            {bodyIsOpen && (
              <div className="commentContainer">
                <label htmlFor="comments" className="commentsLabel">
                  {content.COMMENTS_LABEL}
                </label>
                <div className="commentsContainer">
                  {cardData?.trackFeedback}
                </div>
              </div>
            )}
            <div className="reviewerContainer">
              <Icon className="reviewerProfilePic" iconName="" />
              <div className="reviewerTag">
                {`reviewed by @${cardData?.listenerUserName}`}
              </div>
            </div>
            <div className="ratingContainer">
              <div
                onClick={() => setBodyIsOpen(!bodyIsOpen)}
                className="ratingHeader"
              >
                <span className="expandIcon">{!bodyIsOpen ? "+" : "-"}</span>
                <Icon
                  className="ratingHeaderIcon"
                  iconName="rating_star_greenbox"
                />
                <div className="ratingHeaderLabel">{content.RATE_LISTENER}</div>
                <div className="ratingInputComponent">
                  <Rate value={avgRating} disabled />
                </div>
              </div>
              {bodyIsOpen && (
                <React.Fragment>
                  <div className="ratingBody">
                    <div className="responseTimeInputFieldContainer">
                      <label
                        htmlFor="responseTime"
                        className="responseTimeLabel"
                      >
                        {content.LISTENER_RESPONSE_TIME}
                      </label>
                      <div className="ratingInputComponent">
                        <Rate
                          onChange={setResponseTimeRaing}
                          value={responseTimeRating}
                          disabled={!!cardData?.ratings?.responseTime}
                        />
                      </div>
                    </div>
                    <div className="serviceAsExpectedInputFieldContainer">
                      <label
                        htmlFor="service"
                        className="serviceAsExpectedLabel"
                      >
                        {content.SERVICE_AS_EXPECTED}
                      </label>
                      <div className="ratingInputComponent">
                        <Rate
                          onChange={setServiceRating}
                          value={serviceRating}
                          disabled={!!cardData?.ratings?.service}
                        />
                      </div>
                    </div>
                    <div className="recommendInputFieldContainer">
                      <label htmlFor="recommend" className="recommendLabel">
                        {content.BUY_AGAIN_OR_RECOMMEND}
                      </label>
                      <div className="ratingInputComponent">
                        <Rate
                          onChange={setRecommendedRating}
                          value={recommendedRating}
                          disabled={!!cardData?.ratings?.recommend}
                        />
                      </div>
                    </div>
                    <div className="feedbackTextAreaContainer">
                      <label htmlFor="feedback" className="commentsLabel">
                        {content.COMMENTS_LABEL}
                      </label>
                      <TextArea
                        rows="8"
                        className="feedbackTextArea"
                        placeholder={content.WRITE_YOUR_FEEDBACK}
                        value={feedbackForListener}
                        onChange={e => setFeedbackForListener(e.target.value)}
                        disabled={!!cardData?.ratings?.comments}
                      />
                    </div>
                  </div>
                  {!cardData.ratings && (
                    <div className="submitButtonWrapper">
                      <Button
                        className="submitButton"
                        onClick={handleSubmitFeedback}
                        buttonText={content.SUBMIT_FEEDBACK}
                      />
                    </div>
                  )}
                </React.Fragment>
              )}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Card;
