import React from 'react';
import './pointsEarned.style.scss';
import { ReactComponent as Dollar } from '../../../assets/icon/PointEarned.svg';
import content from '../content';

const PointsEarnedContainer = ({updatedCoin}) => {

    return (
        <div>
            <div className="pointEarned-container">
                <Dollar className="coin-earned-icons" />
                <h2 className="updatedCoin-text">{updatedCoin}</h2>
            </div>
            <h3>{content.POINTS_EARNED}</h3>
        </div>
    )
}

export default PointsEarnedContainer;