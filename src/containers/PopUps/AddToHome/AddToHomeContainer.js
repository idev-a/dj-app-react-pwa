import React from 'react';
import { connect } from "react-redux";
import AddToHome from "../../../components/PopUps/AddToHomeComponent/AddToHomeComponent";

const AddToHomeContainer = (props) => {
    const handleInputChange = (e) => {
        debugger;
        // action to backend goes here
    }
    return (
        <AddToHome 
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
)(AddToHomeContainer);