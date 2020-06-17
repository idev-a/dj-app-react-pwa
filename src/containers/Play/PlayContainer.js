import React, { useEffect, useState, useCallback } from 'react';
import { connect } from "react-redux";
import PlayComponent from './../../components/Play/PlayComponent';
import { discoverSelector } from "../../state/selectors/discover";
import {
    getTracksForDiscover,
    postPlayTrackFeedback,
} from "../../state/actions/discoverActions";

const PlayContainer = ({ getTracksDispatchAction, tracks }) => {

    const [feedback, setFeedback] = useState({});
    const [updatedCoin, setUpdatedCoin] = useState(null);
    const [showPointsEarnedContainer, setShowPointsEarned] = useState(false);
    const [componentIndex, setComponentIndex] = useState(0);

    useEffect(() => {
        getTracksDispatchAction();
    }, [getTracksDispatchAction]);

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
            })
            .catch((err) => {
                console.log(err);
            });
    }, [feedback, tracks, componentIndex])

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
        />
    )
}

const dispatchActions = (dispatch) => ({
    getTracksDispatchAction: () => dispatch(getTracksForDiscover()),
});

export default connect(
    discoverSelector,
    dispatchActions
)(PlayContainer);