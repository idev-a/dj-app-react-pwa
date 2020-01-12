import React from 'react';
import { connect } from "react-redux";
import PriceComponent from "../../../components/ListenerPreferences/PriceComponent/PriceComponent";

const PriceContainer = (props) => {
    return (
        <PriceComponent/>
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