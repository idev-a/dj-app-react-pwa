import React from 'react';
import './ImpressedContainer.scss';
import { ReactComponent as Dollar } from '../../../assets/icon/MoneyBag.svg';
import { ReactComponent as Happy } from '../../../assets/icon/happy-face.svg';
import Button from '../../../common/Button/index';

import content from '../content';

const ScoreRating = ({ handleSubmitImpressed }) => {

    return (
        <div>
            <Happy className="impressed-happy-icon" />
            <div className="image-footer-icon-container-2">
                <Dollar className="image-footer-icons-2" />
                <div className="multiplier-container">
                    <p className="coin-number">10</p><p className="coin-text">{content.COIN}</p>
                </div>
            </div>
            <h3>{content.IMPRESSED_TEXT}</h3>
            <Button
                className="yes-button"
                buttonText="Yes"
                onClick={() => handleSubmitImpressed(true)}
            />
            <Button
                className="no-button"
                buttonText="No"
                onClick={() => handleSubmitImpressed(false)}
            />
        </div>
    )
}

export default ScoreRating;