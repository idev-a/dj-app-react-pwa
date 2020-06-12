import React from 'react';
import './style.scss';
import content from '../content';
import { ReactComponent as HomeIcon } from '../../../assets/icon/home.svg';

const DialogContent = () => {

    return (
        <div>
            <div className="home-icon">
                <svg className="home-icon-svg"><HomeIcon /></svg>
            </div><br />
            <span className="home-header">{content.HOME}</span> <br />
            <p className="home-overlay-pargraph">{content.HOME_OVERLAY_TEXT}</p>
        </div>
    )
}

export default DialogContent;
