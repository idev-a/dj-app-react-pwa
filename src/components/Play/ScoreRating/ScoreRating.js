import React, { useState } from 'react';
import './scoreRating.style.scss';
import { ReactComponent as Dollar } from '../../../assets/icon/MoneyBag.svg';
import { ReactComponent as Star } from '../../../assets/icon/star.svg';
import { ReactComponent as StarFilled } from '../../../assets/icon/star-filled.svg';
import { ReactComponent as StarUnfilled } from '../../../assets/icon/star-unfilled.svg';
import Button from '../../../common/Button/index';

import content from '../content';

const ScoreRating = ({ handleSubmitScore }) => {

    const [starSeleted, setSelectedStar] = useState(0);

    const handleOnSelectStar = (e, i) => {
        setSelectedStar(i);
    }

    return (
        <div>
            <Star className="rating-star-icon" />
            <div className="image-footer-icon-container-2">
                <Dollar className="image-footer-icons-2" />
                <div className="multiplier-container">
                    <p className="coin-number">10</p><p className="coin-text">{content.COIN}</p>
                </div>
            </div>
            <h3>{content.SCORE_TRACK}</h3>
            <div className="stars-container">
                {
                    [...Array(5)].map((e, i) => {
                        return (
                            (starSeleted > i) ?
                                <StarFilled className="star-gold" onClick={(e) => handleOnSelectStar(e, i + 1)} /> :
                                <StarUnfilled className="star-gold" onClick={(e) => handleOnSelectStar(e, i + 1)} />
                        )
                    })
                }
            </div>
            <Button
                className="submit-button"
                buttonText="Submit"
                onClick={() => handleSubmitScore(starSeleted)}
            />
        </div>
    )
}

export default ScoreRating;