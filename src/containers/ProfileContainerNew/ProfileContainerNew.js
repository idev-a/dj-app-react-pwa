import React, { useEffect, useCallback } from 'react';
import ProfileComponentNew from './../../components/ProfileComponentNew/ProfileComponentNew';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getUserProfile, getQualifyingTracks, getFollowRequest } from "../../state/actions/profileActions";

const ProfileContainerNew = ({
    profileDetails,
    getUserProfileDispatch,
    userData,
    history,
    getQualifyingTracksDispatchAction,
    qualifyingTrack,
    putFollowRequest,
}) => {
    const { username } = useParams();

    useEffect(() => {
        getUserProfileDispatch(username);
        getQualifyingTracksDispatchAction(username);
    }, [username, getUserProfileDispatch, getQualifyingTracksDispatchAction]);

    const handleOnClickSettings = useCallback(() => {
        history.push('/profile-settings')
    }, [history]);

    const handleShareProfileClick = useCallback(() => {
        if (navigator.share) {
            navigator.share({
                title: "BREAKER",
                url: window.location.href
            });
        }
    }, []);

    const handleOnClickFollow = useCallback((is_following) => {
        const data = {
            follower: profileDetails ?._id,
            follow: is_following.toString()
        }
        putFollowRequest(data).then(() => {
            getUserProfileDispatch(username);
        });
    }, [putFollowRequest, profileDetails, getUserProfileDispatch, username]);

    return (
        <ProfileComponentNew
            userDetails={profileDetails}
            user={userData}
            handleOnClickSettings={handleOnClickSettings}
            handleShareProfileClick={handleShareProfileClick}
            tracksHistory={qualifyingTrack}
            handleOnClickFollow={handleOnClickFollow}
        />
    )
}

const dispatchAction = (dispatch) => ({
    getQualifyingTracksDispatchAction: username => dispatch(getQualifyingTracks(username)),
    getUserProfileDispatch: username => dispatch(getUserProfile(username)),
    putFollowRequest: data => dispatch(getFollowRequest(data))
});

const mapState = state => ({
    profileDetails: state.profile.profileDetails,
    qualifyingTrack: state.profile.qualifyingTrack ?.trackHistory,
    userData: state.userDetails.user,
});

export default connect(
    mapState,
    dispatchAction
)(ProfileContainerNew);