import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PlayComponent from './../../components/Play/PlayComponent';
import { discoverSelector } from "../../state/selectors/discover";
import {
    getTracksForDiscover,
} from "../../state/actions/discoverActions";

const PlayContainer = ({ getTracksDispatchAction, tracks }) => {

    useEffect(() => {
        getTracksDispatchAction();
    }, [getTracksDispatchAction]);

    return (
        <PlayComponent
            track={tracks[0]}
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