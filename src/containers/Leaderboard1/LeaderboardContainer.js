import React from 'react';
import { connect } from "react-redux";
import LeaderboardComponent from '../../components/Leaderboard1/LeaderboardComponent';
import { getUserDetails } from "../../state/actions/userActions";
import { getTopListeners } from "../../state/actions/listenerActions";

class LeaderboardContainer extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
            getTopListeners,
        } = this.props;
        getUserDetailsDispatchAction();
        getTopListeners();
    }

    render() {
        return (
            <LeaderboardComponent 
            user={this.props.user}
            topListeners={this.props.topListeners}
            />
        )
    }

}

const mapStateToProps = (state) => {
    const targetState = state.userDetails || {};
    const listenerState = state.listeners || {};

    return{
        user : targetState.user || {},
        topListeners: listenerState.topListeners || {},
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
    getTopListeners: ()=> dispatch(getTopListeners()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardContainer);