import React from 'react';
import { connect } from "react-redux";
import NewCard from "../../../components/PopUps/NewCardComponent/NewCardComponent";

const NewCardContainer = (props) => {
    const handleInputChange = (e) => {
        debugger;
        // action to backend goes here
    }
    return (
        <NewCard 
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
)(NewCardContainer);