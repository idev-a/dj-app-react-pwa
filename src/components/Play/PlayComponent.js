import React from 'react';
import './play.style.scss';
import content from './content';
import { ReactComponent as Dollar } from '../../assets/icon/Dollar.svg';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as Help } from '../../assets/icon/help.svg';
import { ReactComponent as Like } from '../../assets/icon/Like.svg';
import { ReactComponent as Dislike } from '../../assets/icon/ThumbsDown.svg';
import IMG from '../../assets/img/playImg1.png'
import NewAudioPlayer from '../NewAudioPlayer';

const PlayComponent = () => {

    return (
        <div className="play-main-container">
            <div className="result-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.BREAKER}</span><br />
                    <small className="app-footer-text">{content.HEADER_TAG_TEXT}</small>
                </div>
                <div className="header-icon-container">
                    <MoneyBag className="header-icon" />
                    <div className="header-icon-text-container">
                        <p className="coin-number">1.2</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon className="header-icon" />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.3</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="play-screen-container-2">
                <div className="play-screen-inner-container-2">
                    <span className="listen-text">{content.LISTEN}</span><br />
                    <small className="disover-artist-text">{content.DISCOVER_ARTIST}</small>
                </div>
                <Help />
            </div>
            <div className="play-image-container">
                <div className="image-container">
                    <img src={IMG} alt="no img" className="center-img" />
                    <div className="song-name-container">
                        <span className="song-name-text">Song Name</span><br />
                        <small className="creator-name-text">Creator</small>
                    </div>
                </div>
                <div className="image-footer-icon-container">
                    <Like className="image-footer-icons" />
                    <Dollar className="image-footer-icons-2" />
                    <div className="multiplier-container">
                        <p className="coin-number">{content.x3}</p><p className="coin-text">{content.MULTIPLIER}</p>
                    </div>
                    <Dislike className="image-footer-icons" />
                </div>
            </div>
            {/* Below provided source is a demo link */}
            <NewAudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        </div>
    )
}

export default PlayComponent;