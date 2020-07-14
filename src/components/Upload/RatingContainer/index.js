import React from 'react';
import '../upload.style.scss';
import content from '../content'
import cx from "classnames";

const RatingContainer = ({
    tracks,
    handleSelectedFeedback,
}) => {

    return (
        <div className="rating-main-container">
                <span className="rating-header-text">{content.RATING_HEADER}</span>
                <div className="rating-container">
                    <div
                        className={cx(
                            "rating-container-1",
                            tracks.selectedFeedback === 1 && "isSelectedRating"
                        )}
                        onClick={() => handleSelectedFeedback(1)}
                    >
                        <small className="plan-text">{content.PLAN_A}</small>
                        <div><span><b>10</b></span> <small className="listner-text">{content.LISTENERS}</small></div>
                        <span className="rating-amount-text">$1</span>
                    </div>
                    <div
                        className={cx(
                            "rating-container-2",
                            tracks.selectedFeedback === 5 && "isSelectedRating"
                        )}
                        onClick={() => handleSelectedFeedback(5)}
                    >
                        <small className="plan-text">{content.PLAN_B}</small>
                        <div><span><b>100</b></span> <small className="listner-text">{content.LISTENERS}</small></div>
                        <span className="rating-amount-text">$5</span>
                    </div>
                </div>
            </div>
    )
}

export default RatingContainer;