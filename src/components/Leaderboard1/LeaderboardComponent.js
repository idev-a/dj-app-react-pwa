import React from 'react';
import './LeaderboardComponent.styles.scss';
import content from "./content";
import { LeftArrowIcon } from './../../assets/icon/svgicon';

import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';

const LeaderboardComponent = ({ user }) => {

    return (
        <div className='leaderboard1-container'>
            <div className="container-2">

                <div className="header-section">
                    <div className="left-section">
                        <svg className="left-arrow-icon"><LeftArrowIcon /></svg>
                    </div>
                    <div className="header-icon-container">
                        <MoneyBag className="header-icon" />
                        <div className="header-icon-text-container">
                            <p className="coin-number">{user.balance}</p><p className="coin-text">{content.COINS_TEXT}</p>
                        </div>
                        <FireIcon className="header-icon" />
                        <div className="header-icon-text-container" >
                            <p className="coin-number">Lv.0</p><p className="coin-text">{content.RATING_TEXT}</p>
                        </div>
                    </div>
                </div>

                <div className="listeners-data">
                    <div className="listeners-data-header">
                        <div className="top-listeners">{content.TOP_LISTENERS}</div>
                        <div className="tracks">{content.TRACKS}</div>
                    </div>
                    {content.LISTENERS_DATA.map((list, index) => {
                        return (
                            <div className="listeners-data-row">
                                <div className="serial-number">
                                    <span className="serial-number-circle">
                                        <span className="serial-number-value">
                                            {index + 1}
                                        </span>
                                    </span>
                                </div>
                                <div className="listener-name-image">
                                    <div className="listener-image"
                                        style={{ background: `url(${list.image}) 0% 0% / cover no-repeat` }}>
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