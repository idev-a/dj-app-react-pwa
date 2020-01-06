import React from 'react';
import { connect } from "react-redux";
import Cookie from "../../../components/PopUps/CookieComponent/CookieComponent";

const CookieContainer = (props) => {
    const handleInputChange = (e) => {
        debugger;
        // action to backend goes here
    }
    return (
        <Cookie 
            onInputChange={handleInputChange}
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
)(CookieContainer);