import React from 'react';
import './WelcomeComponent.styles.scss';
import Button from './../../common/Button/index';
import content from "./content";
import {ReactComponent as PlusBoxIcon} from '../../assets/icon/plus box.svg';
import {ReactComponent as UploadPhoto} from '../../assets/icon/upload photo.svg';

const WelcomeComponent = ({ user, handleOnClickContinue }) => {

    return (
        <div className='welcome-container'>
            <div className="container-2">
                <div className="logo-main-container">
                    <div className="logo-container" />
                </div>
                <div className='welcome-avatar-container'>
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
                    onClick={handleOnClickContinue }
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