import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTracksAction, postFeedback } from "../../actions";
import Component from "./DiscoverComponent";
const Discover = (props) => {
  const { email, token, fetchTracksActionDispatch, tracks } = props;
  const [showlogOut, setShowLogout] = useState(false);
  useEffect(() => {
    fetchTracksActionDispatch();
  }, [fetchTracksActionDispatch]);

  const handleSwipe = useCallback(
    async (feedbackId, swipeType) => {
      await postFeedback(feedbackId, swipeType, email, token);
    },
    [email, token]
  );

  return (
    <Component
      tracks={tracks}
      showlogOut={showlogOut}
      handleSwipe={handleSwipe}
      handleLogOut={() => setShowLogout(!showlogOut)}
    />
  );
};

const dispatchActions = (dispatch) => ({
  fetchTracksActionDispatch: () => dispatch(fetchTracksAction()),
});

const mapStateToProps = (state) => ({
  tracks: state.discover.tracks,
  token: state.auth.user.token,
  email: state.auth.user.email,
});


Discover.propTypes = {
  tracks: PropTypes.array,
  token: PropTypes.string,
  email: PropTypes.string,
}

export default connect(
  mapStateToProps,
  dispatchActions
)(Discover);
