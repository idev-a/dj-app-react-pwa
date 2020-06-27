import React, { useState, useCallback } from 'react';
import './leaderboard.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search-icon.svg';
import { ReactComponent as HelpIcon } from '../../assets/icon/help.svg';
import { ReactComponent as Music } from '../../assets/icon/music-1.svg';
import { ReactComponent as Music2 } from '../../assets/icon/music-2.svg';
import { ReactComponent as Multimedia } from '../../assets/icon/multimedia.svg';
import DialogBox from '../../common/DialogBox/DialogBox';
import InputField from './../../common/InputField';
import DialogContent from './DialogContent/index';

const LeaderboardHomeComponent = ({ details, handleOnClickTopListners }) => {

    const { balance } = details;

    const [search, setSearchText] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const onSearchChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const handleOnToggleHelp = useCallback((data) => {
        setShowHelp(data);
    }, []);

    return (
        <div className="leaderboard-home-main-container">
            <div className="home-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.BREAKER}</span><br />
                    <h6 className="trending-text">{content.TRENDING_TXT}</h6>
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">{balance}</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.0</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="search-container">
                <SearchIcon />
                <InputField
                    id="search"
                    onChange={onSearchChange}
                    value={search}
                    placeholder={content.SEARCH_TEXT}
                    className="search-field"
                />
            </div>
            <div className="leaderbord-header">
                <span className="leaderbord-updates">{content.LEADERBOARDS}</span>
                <HelpIcon onClick={() => handleOnToggleHelp(true)} />
            </div>
            <div className="leaderbord-card-container">
                <div className="leaderbord-card" onClick={handleOnClickTopListners}>
                    <Music className="leaderbord-icon" />
                    <span className="leaderboard-card-text">{content.TOP_LISTNERS}</span>
                </div>
                <div className="leaderbord-card">
                    <Multimedia className="leaderbord-icon" />
                    <span className="leaderboard-card-text">{content.TOP_ARTISTS}</span>
                </div>
                <div className="leaderbord-card">
                    <Music2 className="leaderbord-icon" />
                    <span className="leaderboard-card-text">{content.TRENDING_TRACKS}</span>
                </div>
            </div>
            {showHelp &&
                <DialogBox
                    bodyComponent={<DialogContent />}
                    onClose={handleOnToggleHelp}
                />
            }
        </div>
    )
}

export default LeaderboardHomeComponent;