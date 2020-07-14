import React, { useState, useCallback } from 'react';
import content from '../content';
import './feedback.style.scss';
import { ReactComponent as Dollar } from '../../../assets/icon/MoneyBag.svg';
import { ReactComponent as Multiplier2 } from '../../../assets/icon/Multiplier2.svg';
import { ReactComponent as Like } from '../../../assets/icon/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/icon/ThumbsDown.svg';
import { ReactComponent as StarFilled } from '../../../assets/icon/star-filled.svg';
import { ReactComponent as StarUnfilled } from '../../../assets/icon/star-unfilled.svg';
import TextArea from '../../../common/TextAreaField';
import Button from '../../../common/Button/index';

const FeedbackContainer = ({ feedback, handleSubmitFeedback }) => {

    const [feedbackText, setFeedbackText] = useState("");

    const handleChangeFeedback = useCallback((value) => {
        setFeedbackText(value);
    }, [])

    return (
        <section>
            <div className="image-footer-icon-container-2">
                <Dollar className="image-footer-icons-2" />
                <div className="multiplier-container">
                    <p className="coin-number">10</p><p className="coin-text">{content.COIN}</p>
                </div>
            </div>
            <div className="image-footer-icon-container-3">
                <Multiplier2 className="image-footer-icons-2" />
                <div className="multiplier-container">
                    <p className="coin-number">{content.x2}</p><p className="coin-text">{content.MULTIPLIER}</p>
                </div>
            </div>
            <div className="feedback-data-container">
                {feedback.liked ? <Like className="feedbackIcon-1" /> : <Dislike className="feedbackIcon-1" />}
                - {feedback.impressed ? <small className="feedback-data-text" >{content.IMPRESSED}</small> : <small className="feedback-data-text" >{content.NOT_IMPRESSED}</small>}
            </div>
            <div className="feedback-data-container">
                {feedback.signed ? <small className="feedback-data-text" >{content.SIGNED}</small> : <small className="feedback-data-text" >{content.NOT_SIGNED}</small>}
                - <div className="stars-container">
                    {[...Array(5)].map((e, i) => {
                        return (
                            (feedback.trackRating > i) ?
                                <StarFilled className="star-gold" /> :
                                <StarUnfilled className="star-gold" />
                        )
                    })}
                </div>
            </div>
            <h3>{content.GIVE_FEEDBACK}</h3>
            <div className="feedback-text-container">
                <TextArea
                    rows="5"
                    className="feedbackTextArea"
                    placeholder={content.COMMENTS_HELP_CREATORS}
                    value={feedbackText}
                    onChange={e => handleChangeFeedback(e.target.value)}
                />
            </div>
            <Button
                className="submit-button"
                buttonText="Submit"
                onClick={() => handleSubmitFeedback(feedbackText)}
            />

        </section>
    )
}

export default FeedbackContainer;