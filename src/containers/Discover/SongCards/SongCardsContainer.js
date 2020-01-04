import React from 'react';
import { connect } from "react-redux";
import SongCardsComponent from "../../../components/Discover/SongCardsComponent/SongCardsComponent";

const SongCardsContainer = (props) => {
    return (
        <SongCardsComponent

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
)(SongCardsContainer);