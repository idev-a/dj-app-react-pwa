import React from 'react';
import { connect } from "react-redux";
import OnboardingComponent from '../../components/OnBoarding2/OnboardingComponent';
import { getUserDetails } from "../../state/actions/userActions";
import history from "../../history";

class OnboardingContainer extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    handleClickGetStarted = () => {
        history.push("/home")
    }

    render() {
        return (
            <OnboardingComponent user={this.props.user} handleClickGetStarted={this.handleClickGetStarted} />
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingContainer);