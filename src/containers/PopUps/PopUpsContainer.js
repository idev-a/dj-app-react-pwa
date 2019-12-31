import React from 'react';
import { connect } from "react-redux";
import PopUp from "../../components/PopUps/PopUpsComponent";

const PopUpsContainer = (props) => {
    const handleInputChange = (e) => {
        debugger;
        // action to backend goes here
    }
    return (
        <PopUp 
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
)(PopUpsContainer);