import React from 'react';
import cx from 'classnames';
import './profileSubmit.style.scss';
import content from './content';
import Button from './../../../common/Button';
import { ReactComponent as Bell } from '../../../assets/icon/bell.svg';
import { ReactComponent as Key } from '../../../assets/icon/access.svg';
import IMG1 from '../../../assets/img/upload photo.png';
import { useCallback } from 'react';

const Submit = ({ userDetails, tracksHistory, handleOnClickFollow }) => {
    const filterRate = 50;

    const { is_following = false } = userDetails

    const handleOnFollow = useCallback(() => {
        handleOnClickFollow((!is_following).toString())
    }, [handleOnClickFollow, is_following])

    return (
        <div className="profile-submit-main-container">
            <div className="profile-send-me-container">
                <div className="profile-send-me-header-container">
                    <span className="profile-send-me-header">{content.SEND_ME}</span>
                    <Button
                        className={cx("follow-button", is_following && "follow-button-red")}
                        onClick={handleOnFollow}
                        buttonText={
                            <div className="follow-container">
                                <Bell className="bell-icon" />
                                <small className="follow-text">{is_following ? "Followed" : content.FOLLOW}</small>
                            </div>
                        }
                    />
                </div>
                <p className="profile-send-me-content">{userDetails ?.headline}</p>
            </div>
            <div className="profile-filter-rate-container">
                <div className="profile-filterRate-header-container">
                    <span className="profile-filter-rate-header">{content.FILTER_RATE}</span>
                    <Button
                        className="filterRate-button"
                        buttonText={"50/100"}
                    />
                </div>
                <p className="profile-filter-rate-content">{content.FILTER_RATE_CONTENT}</p>
            </div>
            <div className="qualifyingTracks-main-container">
                <small className="qualifyingTrack-header">{content.QUALIFYING_TRACKS}</small>
                <div className="qualifyingTrack-main-inner">
                    {tracksHistory ?.trackStats ?.length ?
                        tracksHistory ?.trackStats.map((data) =>
                            <div className="qualifyingTrack-inner-container" >
                                <div className="qualifyingTrack-container">
                                    <div className="qualifyingTrack-container-1">
                                        <img src={data ?.userDetails ?.profile_image || IMG1} alt="no Img" className="qualifying-image" />
                                        <div className="qualifying-tract-detail">
                                            <span className="qualifying-track-name">{data.trackTitle}</span><br />
                                            <small className="qualifying-track-author">{`By ${data ?.userDetails ?.display_name}`}</small>
                                        </div>
                                    </div>
                                    <div className="qualifyingTrack-container-2">
                                        <span className="qualifrying-track-rate">{`${data.noOfLikes}/${data.noOfFeedbacks}`}</span>
                                        {data.noOfLikes >= filterRate && <Key className="qualifying-track-key" />}
                                    </div>
                                </div>
                            </div>
                        ) :
                            <p className="qualifyingTrack-text-content">{content.QUALIFYING_TEXT}</p>
                    }
                </div>
            </div>
            <Button
                className="submit-music-now-button"
                buttonText={content.SUBMIT_MUSIC_NOW}
            />
        </div>
    )
}

export default Submit;