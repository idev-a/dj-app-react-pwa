import React from 'react';
import { connect } from "react-redux";
import WelcomeComponent from './../../components/Welcome/WelcomeComponent';
import { getUserDetails } from "../../state/actions/userActions";

class WelcomeContainer extends React.Component {

    componentDidMount() {
        const {
            getUserDetailsDispatchAction,
        } = this.props;
        getUserDetailsDispatchAction();
    }

    handleOnClickContinue = () => {
        this.props.history.push("/onboarding");
    }

    render() {
        return (
            <WelcomeComponent
                user={this.props.user}
                handleOnClickContinue={this.handleOnClickContinue}
            />
        )
    }

}

const mapStateToProps = (state) => {
    const targetState = state.userDetails || {};

    return {
        user: targetState.user || {},
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);