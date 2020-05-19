import React from 'react';
import { connect } from "react-redux";
import OnboardingComponent from '../../components/Onboarding2/OnboardingComponent';
import { getUserDetails } from "../../state/actions/userActions";

class OnboardingContainer extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    render() {
        return (
            <OnboardingComponent user={this.props.user}/>
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