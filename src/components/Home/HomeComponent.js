import React, { useState } from 'react';
import './home.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/Group 485.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/Group 487.svg';
import { ReactComponent as SearchIcon } from '../../assets/icon/search-icon.svg';
import { ReactComponent as HelpIcon } from '../../assets/icon/help.svg';
import { ReactComponent as Play } from '../../assets/icon/play.svg';
import InputField from './../../common/InputField';
import { useCallback } from 'react';
import DialogBox from '../../common/DialogBox/DialogBox';
import DialogContent from './DialogContent';
import moment from 'moment';


const HomeComponent = ({ details, activities }) => {
    const { balance } = details;

    const [search, setSearchText] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    const onSearchChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, [setSearchText]);

    const handleOnToggleHelp = useCallback((data) => {
        setShowHelp(data);
    }, [setShowHelp]);

    const timeDiffCalc = (dateFuture, dateNow) => {
        let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;
        const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
        diffInMilliSeconds -= hours * 3600;
        const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
        diffInMilliSeconds -= minutes * 60;

        if (days > 0) {
            return `${days} day ago`;
        }
        if (hours > 0) {
            return `${hours} hr ago`;
        }
        if (minutes > 0) {
            return `${minutes} min ago`;
        }

        return 'now';
    }

    return (
        <div className="home-main-container">
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
                        <p className="coin-number">Lv.3</p><p className="coin-text">{content.RATER}</p>
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
            <div className="activity-header">
                <span className="activity-updates">{content.ACTIVITY_UPDATES}</span>
                <HelpIcon onClick={() => handleOnToggleHelp(true)} />
            </div>
            <div className="activity-card-container">
                {activities && activities.map((activity) =>
                    <div className="activity-card">
                        {activity.song_update ? <svg className="activity-play-icon"><Play /></svg> : <div className="avatar-container" />}
                        <p className="card-text" >{activity.message}</p>
                        <span className="time-text">{timeDiffCalc(moment(activity.created_on), new Date())}</span>
                    </div>
                )}
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

export default HomeComponent;