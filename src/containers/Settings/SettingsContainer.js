import React from 'react';
import { connect } from "react-redux";
import SettingsComponent from "../../components/Settings/SettingsComponent";

const SettingsContainer = (props) => {
    return (
        <SettingsComponent

        />
    );
};

const mapStateToProps = (state) => ({
    
});

const mapActions = (dispatch) => ({

});

export default connect (
    mapStateToProps,
    mapActions
)(SettingsContainer);