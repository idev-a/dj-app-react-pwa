import React, { useEffect, useState, useCallback } from 'react';
import { connect } from "react-redux";
import PlayComponent from './../../components/Play/PlayComponent';
import { discoverSelector } from "../../state/selectors/discover";
import {
    getTracksForDiscover,
    postPlayTrackFeedback,
} from "../../state/actions/discoverActions";
import {
    getUserDetails,
} from "../../state/actions/userActions";

const PlayContainer = ({ getUserDetailsDispatchAction, getTracksDispatchAction, tracks, userDetails, updatedCoin, postPlayTrackFeedback }) => {

    const [feedback, setFeedback] = useState({});
    const [showPointsEarnedContainer, setShowPointsEarned] = useState(false);
    const [componentIndex, setComponentIndex] = useState(0);

    useEffect(() => {
        getUserDetailsDispatchAction();
        getTracksDispatchAction();
    }, [getTracksDispatchAction, getUserDetailsDispatchAction]);

    const handleOnUpdatefeedback = useCallback((id, value) => {
        const data = feedback;
        data[id] = value;
        setFeedback(data);
    }, [feedback])

    const postTrackFeedback = useCallback(() => {
        const data = feedback;
        data.feedbackId = tracks[0]._id;
        postPlayTrackFeedback(data, () => {
            setShowPointsEarned(true);
            setComponentIndex(componentIndex + 1);
            getUserDetailsDispatchAction();
            setFeedback({});
        });
    }, [feedback, tracks, postPlayTrackFeedback, componentIndex, getUserDetailsDispatchAction])

    const handleOnClosePointEarnedContainer = useCallback(() => {
        setShowPointsEarned(!showPointsEarnedContainer);
    }, [showPointsEarnedContainer]);

    return (
        <PlayComponent
            track={tracks[componentIndex]}
            handleOnUpdatefeedback={handleOnUpdatefeedback}
            feedback={feedback}
            postTrackFeedback={postTrackFeedback}
            updatedCoin={updatedCoin}
            showPointsEarnedContainer={showPointsEarnedContainer}
            handleOnClosePointEarnedContainer={handleOnClosePointEarnedContainer}
            userDetails={userDetails}
            tracks={tracks}
            componentIndex={componentIndex}
        />
    )
}

const dispatchActions = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    getTracksDispatchAction: () => dispatch(getTracksForDiscover()),
    postPlayTrackFeedback: (data, callback) => dispatch(postPlayTrackFeedback(data, callback)),
});

export default connect(
    discoverSelector,
    dispatchActions
)(PlayContainer);