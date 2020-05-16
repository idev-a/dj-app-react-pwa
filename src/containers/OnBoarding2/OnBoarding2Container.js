import React from 'react';
import { connect } from "react-redux";
import OnBoarding2Component from '../../components/OnBoarding2/OnBoarding2Component';
import { getUserDetails } from "../../state/actions/userActions";

class OnBoarding2Container extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    render() {
        return (
            <OnBoarding2Component user={this.props.user}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding2Container);