import React from 'react';
import './WelcomeComponent.styles.scss';
import Button from './../../common/Button/index';
import HearBKNewIcon from './../../common/HearBKNewIcon/index';
import content from "./content";
import { PlusBoxIcon, UploadPhoto } from './../../assets/icon/icon';

const WelcomeComponent = ({ user }) => {

    return (
        <div className='welcome-container'>
            <div className="container-2">
                <div className="logo-main-container">
                    <div className="logo-container" />
                </div>
                <div className='avatar-container'>
                    <svg className="upload-photo"><UploadPhoto /></svg>
                    <svg className="add-photo"><PlusBoxIcon/></svg>
                </div>
                <div className="user-detail">
                    <span className="c-user-detail-hi">{content.HI}</span>
                    <span className="c-user-detail-name">{user.display_name || ""}</span>
                </div>
                <div className="welcome-msg">
                    <span>{content.WELCOME_TO}</span>
                    <span>{content.MUSIC_INDUSTRY}</span>
                </div>
                <div className="set-up-message">
                    <span>{content.LETS_GET_YOU}</span>
                    <span>{content.BECOME_A_MOGUL}</span>
                </div>
                <Button
                    className="continue-button"
                    buttonText={content.CONTINUE}
                />
                <div className="progress-bar">
                    <div className="bar-1" />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent;