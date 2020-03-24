import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../state/actions/profileActions";
import { connect } from "react-redux";

const ProfileContainer = ({
  profileDetails,
  getUserProfileDispatch,
  history
}) => {
  const { username } = useParams();

  useEffect(() => {
    getUserProfileDispatch(username);
  }, [username, getUserProfileDispatch]);

  const handleConnectClick = useCallback(() => {
    const listener = {
      ...profileDetails,
      listener_tags: profileDetails?.listener_tags.map(({ _id }) => _id),
    };
    history.push("/pro-feedback", listener);
  }, [profileDetails, history]);

  const handleShareProfileClick = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: "HEAR BK",
        url: window.location.href
      });
    }
  }, []);

  return (
    <Profile
      profileDetails={profileDetails}
      userName={username}
      onShareProfileClick={handleShareProfileClick}
      handleConnectClick={handleConnectClick}
    />
  );
};

const dispatchActions = dispatch => ({
  getUserProfileDispatch: username => dispatch(getUserProfile(username))
});

const mapState = state => ({
  profileDetails: state.profile.profileDetails
});

ProfileContainer.propTypes = {
  profileDetails: PropTypes.object.isRequired,
  getUserProfileDispatch: PropTypes.func.isRequired
};

export default connect(
  mapState,
  dispatchActions
)(ProfileContainer);
