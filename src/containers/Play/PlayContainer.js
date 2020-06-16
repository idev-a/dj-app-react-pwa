import React, { useEffect, useState, useCallback } from 'react';
import { connect } from "react-redux";
import PlayComponent from './../../components/Play/PlayComponent';
import { discoverSelector } from "../../state/selectors/discover";
import {
    getTracksForDiscover,
    postPlayTrackFeedback,
} from "../../state/actions/discoverActions";

const PlayContainer = ({ getTracksDispatchAction, tracks }) => {

    const[feedback, setFeedback] = useState({});

    useEffect(() => {
        getTracksDispatchAction();
    }, [getTracksDispatchAction]);

    const handleOnUpdatefeedback = useCallback( (id, value) => {
        const data = feedback;
        data[id]= value;
        setFeedback(data);
    },[feedback])

    const postTrackFeedback = () => {
        const data = feedback;
        data.feedbackId= tracks[0]._id;
        postPlayTrackFeedback(data)
    }

    return (
        <PlayComponent
            track={tracks[0]}
            handleOnUpdatefeedback={handleOnUpdatefeedback}
            feedback={feedback}
            postTrackFeedback={postTrackFeedback}
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