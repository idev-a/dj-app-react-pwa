import React from 'react';
import './OnboardingComponent.styles.scss';
import Button from './../../common/Button/index';
import content from "./content";
import { ReactComponent as Star} from '../../assets/icon/Icon awesome-star.svg';
import { ReactComponent as Check} from '../../assets/icon/Icon metro-checkmark.svg';
const OnboardingComponent = ({ user }) => {

    return (
        <div className='onboarding2-container'>
            <div className="container-2">
                <div className="logo-main-container">
                    <div className="logo-container" />
                </div>
                <div className="lets-go-message">
                    <span className="content-lets-go">{content.LETS_GO}</span>
                    <span className="content-mogul-points">
                        <span className="content-mogul-status">{content.MOGUL_STATUS}</span>
                        <span className="content-points-now">{content.POINTS_NOW}</span>
                    </span>
                </div>
                <div className="stars">
                    <div className="star-container">
                        <Star className="star-icon" />
                        <Check className="star-check-icon"/>
                    </div>
                    <div className="star-container">
                        <Star className="star-icon" />
                        <Check className="star-check-icon"/>
                    </div>
                    <div className="star-container">
                        <Star className="star-icon-2" />
                        <span className="star-icon-text">3</span>
                    </div>
                </div>
                <div className="stars-progress-bar">
                    <div className="bar-1" />
                    <div className="bar-2" />
                    <span className="dot"></span>
                    <div />
                </div>
                <div className="promote">
                    <div className="promote-msg">
                        <span className="content-promote-artists">{content.PROMOTE_ARTISTS}</span>
                    </div>
                    <div className="first-row">
                        <span className="first-row-data">{content.RATE_TRACKS}</span>
                        <span className="first-row-data">{content.SHARE_MUSIC}</span>
                    </div>
                    <div className="second-row">
                        <span className="second-row-data">{content.BREAK_ARTISTS}</span>
                    </div>
                </div>
                <div className="learn">
                    <div className="learn-msg">
                        <span className="learn-the-business">{content.LEARN_THE_BUSINESS}</span>
                    </div>
                    <div className="first-row">
                        <span className="first-row-data">{content.QUIZZES}</span>
                        <span className="first-row-data">{content.CHALLENGES}</span>
                    </div>
                    <div className="second-row">
                        <span className="second-row-data">{content.MISSIONS}</span>
                    </div>
                </div>
                <div className="build">
                    <div className="build-msg">
                        <span className="content-promote-artists">{content.BUILD_YOUR_REPUTATION}</span>
                    </div>
                    <div className="first-row">
                        <span className="first-row-data">{content.CERTIFICATIONS}</span>
                        <span className="first-row-data">{content.EXPERIENCE}</span>
                    </div>
                    <div className="second-row">
                        <span className="second-row-data">{content.CONNECTIONS}</span>
                    </div>
                </div>
                <Button
                    className="get-started-button"
                    buttonText={content.GET_STARTED}
                />
                <div className="progress-bar">
                    <div />
                    <div />
                    <div className="bar-1" />
                </div>
            </div>
        </div>
    )
}

export default OnboardingComponent;