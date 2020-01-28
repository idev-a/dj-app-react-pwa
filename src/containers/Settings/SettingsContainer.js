import React, { useEffect, useState, useCallback } from 'react';
import { connect } from "react-redux";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { preferencsSelector } from '../../state/selectors/preferences';
import { 
    getUserDetails
} from "../../state/actions/userActions";

const SettingsContainer = (props) => {
    const [profileIsOpen, toggleProfile] = useState(false);
    const [accountIsOpen, toggleAccount] = useState(false);
    const [paymentIsOpen, togglePayment] = useState(false);
    const [subscriptionIsOpen, toggleSubscription] = useState(false);
    const [preferencesIsOpen, togglePreferences] = useState(false);

    const { userDetails, getUserDetailsDispatchAction } = props;

    useEffect(() => {
        getUserDetailsDispatchAction();
    }, [getUserDetailsDispatchAction])

    const onInputChange = useCallback((e) => {
        console.log(e.target.value);
    }, []);

    return (
        <SettingsComponent 
            profileIsOpen={profileIsOpen}
            accountIsOpen={accountIsOpen}
            paymentIsOpen={paymentIsOpen}
            subscriptionIsOpen={subscriptionIsOpen}
            preferencesIsOpen={preferencesIsOpen}
            toggleProfile={toggleProfile}
            toggleAccount={toggleAccount}
            togglePayment={togglePayment}
            toggleSubscription={toggleSubscription}
            togglePreferences={togglePreferences}
            details={userDetails}
            onInputChange={onInputChange}
        />
    );
};

const dispatchActions = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails())
});

export default connect (
    preferencsSelector,
    dispatchActions
)(SettingsContainer);