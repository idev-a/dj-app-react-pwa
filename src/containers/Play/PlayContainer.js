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

const PlayContainer = ({ getUserDetailsDispatchAction, getTracksDispatchAction, tracks, userDetails }) => {

    const [feedback, setFeedback] = useState({});
    const [updatedCoin, setUpdatedCoin] = useState(null);
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
        postPlayTrackFeedback(data)
            .then(res => res.json())
            .then((resp) => {
                setUpdatedCoin(resp.updatedCoin);
                setShowPointsEarned(true);
                setComponentIndex(componentIndex + 1);
                getUserDetailsDispatchAction();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [feedback, tracks, componentIndex, getUserDetailsDispatchAction])

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
        />
    )
}

const dispatchActions = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    getTracksDispatchAction: () => dispatch(getTracksForDiscover()),
});

export default connect(
    discoverSelector,
    dispatchActions
)(PlayContainer);