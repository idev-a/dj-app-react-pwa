import React, { useCallback, useState } from 'react';
import { connect } from "react-redux";
import SettingsComponent from "../../components/Settings/SettingsComponent";
import { updateUserInfo } from "../../state/actions/userActions";
import { userSelector } from "../../state/selectors/users";

const SettingsContainer = (props) => {
    return (
        <SettingsComponent

        />
    );
};

const mapStateToProps = (state) => ({
    user: userSelector(state)
});

const mapActions = (dispatch) => ({
    updateUser: (requestData) => dispatch(updateUserInfo(requestData))
});

export default connect (
    mapStateToProps,
    mapActions
)(SettingsContainer);