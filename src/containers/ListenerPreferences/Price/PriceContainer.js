import React from 'react';
import { connect } from "react-redux";
import PriceForm from "../../../components/ListenerPreferences/PriceForm";

const PriceContainer = (props) => {
    return (
        <PriceForm />
    );
};

const mapStateToProps = (state) => ({

});

const mapActions = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapActions
)(PriceContainer);