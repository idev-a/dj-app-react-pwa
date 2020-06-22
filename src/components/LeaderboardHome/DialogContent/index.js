import React from 'react';
import './dialogContant.style.scss';
import content from '../content';
import { ReactComponent as Charts } from '../../../assets/icon/business.svg';

const DialogContent = () => {

    return (
        <div>
            <div className="home-icon">
                <Charts className="home-icon-svg" />
            </div><br />
            <span className="home-header">{content.CHARTS}</span> <br />
            <p className="home-overlay-pargraph">{content.HOME_LEADERBOARD_OVERLAY_TEXT}</p>
        </div>
    )
}

export default DialogContent;
