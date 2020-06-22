import React, { useEffect } from 'react';
import LeaderboardHomeComponent from '../../components/LeaderboardHome/LeaderboardHomeComponent';
import { connect } from 'react-redux';
import {
    getUserDetails,
} from "../../state/actions/userActions";
import history from "../../history";
import { preferencsSelector } from "../../state/selectors/preferences";

const LeaderboardHomeContainer = ({ getUserDetailsDispatchAction, userDetails }) => {

    useEffect(() => {
        getUserDetailsDispatchAction()
    }, [getUserDetailsDispatchAction]);

    const handleOnClickTopListners = () => {
        history.push("/leaderboard")
    }

    return (
        <LeaderboardHomeComponent
            details={userDetails}
            handleOnClickTopListners={handleOnClickTopListners}
        />
    )
}

const dispatchAction = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
});

export default connect(
    (state) => ({
        ...preferencsSelector(state),
    }),
    dispatchAction
)(LeaderboardHomeContainer);