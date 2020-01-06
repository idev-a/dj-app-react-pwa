import React from 'react';
import { connect } from "react-redux";
import DiscoverComponent from "../../components/Discover/DiscoverComponent";

const DiscoverContainer = (props) => {
    return (
        <DiscoverComponent

        />
    );
};

const mapStateToProps = (state) => ({

});

const mapActions = (state) => ({

});

export default connect(
    mapStateToProps,
    mapActions
)(DiscoverContainer);