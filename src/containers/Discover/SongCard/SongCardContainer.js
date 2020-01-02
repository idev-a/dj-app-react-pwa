import React from 'react';
import { connect } from "react-redux";
import SongCardComponent from "../../../components/Discover/SongCardComponent/SongCardComponent";

const SongCardContainer = (props) => {
    return (
        <SongCardComponent

        />
    );
};

const mapStateToProps = (state) => ({

});

const mapActions = (dispatch) => ({

});

export default connect(
    mapStateToProps,
    mapActions
)(SongCardContainer);