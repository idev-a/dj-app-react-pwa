import React from 'react';
import './SignContainer.scss';
import { ReactComponent as Dollar } from '../../../assets/icon/Multiplier.svg';
import { ReactComponent as Sign } from '../../../assets/icon/Edit.svg';
import Button from '../../../common/Button/index';

import content from '../content';

const ScoreRating = ({ handleSubmitImpressed }) => {

    return (
        <div>
            <Sign className="sign-icon" />
            <div className="image-footer-icon-container-2">
                <Dollar className="image-footer-icons-2" />
                <div className="multiplier-container">
                    <p className="coin-number">{content.x3}</p><p className="coin-text">{content.MULTIPLIER}</p>
                </div>
            </div>
            <h3>{content.SIGN_TEXT}</h3>
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