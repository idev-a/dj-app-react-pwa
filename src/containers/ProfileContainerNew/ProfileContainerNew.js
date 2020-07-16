import React, { useEffect, useCallback } from 'react';
import ProfileComponentNew from './../../components/ProfileComponentNew/ProfileComponentNew';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getUserProfile } from "../../state/actions/profileActions";

const ProfileContainerNew = ({
    profileDetails,
    getUserProfileDispatch,
    history
}) => {
    const { username } = useParams();

    useEffect(() => {
        getUserProfileDispatch(username);
    }, [username, getUserProfileDispatch]);
    
    const handleOnClickSettings = useCallback(()=> {
        history.push('/profile-settings')
    },[history]);

    return (
        <ProfileComponentNew
            userDetails={profileDetails}
            handleOnClickSettings={handleOnClickSettings}
        />
    )
}

const dispatchAction = (dispatch) => ({
    getUserProfileDispatch: username => dispatch(getUserProfile(username))
});

const mapState = state => ({
    profileDetails: state.profile.profileDetails
});

export default connect(
    mapState,
    dispatchAction
)(ProfileContainerNew);