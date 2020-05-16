import React from 'react';
import { connect } from "react-redux";
import Leaderboard1Component from '../../components/Leaderboard1/Leaderboard1Component';
import { getUserDetails } from "../../state/actions/userActions";

class Leaderboard1Container extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    render() {
        return (
            <Leaderboard1Component user={this.props.user}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard1Container);