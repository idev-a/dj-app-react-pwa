import React from 'react';
import { connect } from "react-redux";
import LeaderboardComponent from '../../components/Leaderboard1/LeaderboardComponent';
import { getUserDetails } from "../../state/actions/userActions";

class LeaderboardContainer extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    render() {
        return (
            <LeaderboardComponent user={this.props.user}/>
        )
    }

}

const mapStateToProps = (state) => {
    const targetState = state.userDetails || {};

    return{
        user : targetState.user || {},
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardContainer);