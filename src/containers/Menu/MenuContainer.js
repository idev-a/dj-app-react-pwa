import React from 'react';
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

export default MenuContainer;