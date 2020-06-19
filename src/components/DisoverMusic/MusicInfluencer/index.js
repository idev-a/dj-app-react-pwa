import React from 'react';
import './MusicInfluencer.style.scss';
import content from './content';
import { ReactComponent as Fire } from '../../../assets/icon/FireIcon.svg';
import { ReactComponent as Arrow } from '../../../assets/icon/InfluencerArrow.svg';

const MusicInfluencer = () => {

    return (
        <section className="music-influencer-main-container">
            <section className="music-influencer-level-main">
                <div className="music-influencer-rating-container-1">
                    <Arrow className="influencer-arrow" />
                    <div className="music-influencer-container-1">
                        <Fire className="music-influencer-fire-icon" />
                        <div>
                            <p className="influencer-level-rating-text">{content.LV4}</p>
                            <p className="influencer-level-rating-tag">{content.INFLUENCER}</p>
                        </div>
                    </div>
                    <p className="influencer-level-rating-desc">{content.YOU_MADE_IT}</p>
                </div>
                <div className="music-influencer-rating-container-2">
                    <Arrow className="influencer-arrow" />
                    <div className="music-influencer-container-1">
                        <Fire className="music-influencer-fire-icon" />
                        <div>
                            <p className="influencer-level-rating-text">{content.LV3}</p>
                            <p className="influencer-level-rating-tag">{content.CURATOR}</p>
                        </div>
                    </div>
                    <p className="influencer-level-rating-desc">{content.ESTABLISH_UR_SPECIALITY}</p>
                </div>
                <div className="music-influencer-rating-container-3">
                    <Arrow className="influencer-arrow" />
                    <div className="music-influencer-container-1">
                        <Fire className="music-influencer-fire-icon" />
                        <div>
                            <p className="influencer-level-rating-text">{content.LV2}</p>
                            <p className="influencer-level-rating-tag">{content.REVIEWER}</p>
                        </div>
                    </div>
                    <p className="influencer-level-rating-desc">{content.BOOST_UR_CREDIBLITY}</p>
                </div>
                <div className="music-influencer-rating-container-4">
                    <div className="music-influencer-container-1">
                        <Fire className="music-influencer-fire-icon" />
                        <div>
                            <p className="influencer-level-rating-text">{content.LV1}</p>
                            <p className="influencer-level-rating-tag">{content.RATER}</p>
                        </div>
                    </div>
                    <p className="influencer-level-rating-desc">{content.YOUR_MUSIC_INDUSTRY}</p>
                </div>
            </section>
            <section className="discover-music-text-container">
                <span className="discover-music-text">{content.BECOME_MUSIC_INFLUENCER}</span>
            </section>
            <p className="discover-music-content-text">{content.LEVEL_UP_TXT}</p>
        </section>
    )
}

export default MusicInfluencer;