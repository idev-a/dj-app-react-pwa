import React from 'react';
import './LeaderboardComponent.styles.scss';
import content from "./content";
import { LeftArrowIcon, GoldCoinIcon } from './../../assets/icon/svgicon';

const LeaderboardComponent = ({ user }) => {

    return (
        <div className='leaderboard1-container'>
            <div className="container-2">

                <div className="header-section">
                    <div className="left-section">
                        <svg className="left-arrow-icon"><LeftArrowIcon /></svg>
                    </div>
                    <div className="right-section">
                        <div className="gold-coin">
                            <svg className="gold-coin-icon"><GoldCoinIcon /></svg>
                            <span className="coins-value">
                                {content.COINS_VALUE}
                            </span>
                            <span className="coins-text">
                                {content.COINS_TEXT}
                            </span>
                        </div>
                        <div className="rating">
                            <div className="rating-circle">
                                <div className="left-half-circle"></div>
                                <span className="rating-value">{content.RATING_VALUE}</span>
                                <div className="right-half-circle"></div>
                            </div>
                            <span className="rating-text">
                                {content.RATING_TEXT}
                            </span>
                        </div>
                        
                    </div>
                </div>

                <div className="listeners-data">
                    <div className="listeners-data-header">
                        <div className="top-listeners">{content.TOP_LISTENERS}</div>
                        <div className="tracks">{content.TRACKS}</div>
                    </div>
                    {content.LISTENERS_DATA.map((list, index) => {
                        return(
                            <div className="listeners-data-row">
                                <div className="serial-number">
                                    <span className="serial-number-circle">
                                        <span className="serial-number-value">
                                            {index+1}
                                        </span>
                                    </span>
                                </div>
                                <div className="listener-name-image">
                                    <div className="listener-image" 
                                        style={{background: `url(${list.image}) 0% 0% / cover no-repeat`}}>
                                    </div>
                                    <p className="listener-name">{list.name}</p>
                                </div>
                                <span className="listener-tracks">{list.tracks}</span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}

export default LeaderboardComponent;