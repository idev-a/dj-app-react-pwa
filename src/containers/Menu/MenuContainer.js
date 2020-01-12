import React from 'react';
import { connect } from "react-redux";
import MenuComponent from "../../components/Menu/MenuComponent";

const MenuContainer = ({
    handleClickMenuToggle,
    toggle
}) => {
    return (
        <MenuComponent 
            handleClickMenuToggle={handleClickMenuToggle}
            toggle={toggle}
        />
    )
}

const mapStateToProps = (state) => ({

});

const mapActions = (dispatch) => ({

});

export default connect (
    mapStateToProps,
    mapActions
)(MenuContainer);