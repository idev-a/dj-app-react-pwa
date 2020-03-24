import React from 'react';
import content from "./content";
import Icon from "../../common/IconComponent";
import "./styles.scss";
import HearBKHeader from "../../common/HearBKHeader";
import { Link, useHistory } from "react-router-dom";
import Button from "../../common/Button";

const MenuComponent = ({
    handleClickMenuToggle,
}) => {
    const history = useHistory();
    return (
        <div className="menuBigContainer">
            <div className="menuComponent">
                <div className="menuSmallContainer">
                    <div className="menuHeader">
                        <div onClick={handleClickMenuToggle} className="cancelIconContainer">
                            <Icon className="cancelIcon" iconName="cancel" />
                        </div>
                        <HearBKHeader />
                    </div>
                    <ul className="menuBody">
                        <label className="menuLabel">
                            {content.MENU_LABEL}
                        </label>
                        {/* <Link to="/search" className="menuLinks">
                            <Icon className="menuLinkIcons" iconName="search" />
                            {content.SEARCH}
                        </Link> */}
                        <Link to="/discover" className="menuLinks" onClick={handleClickMenuToggle}>
                            <Icon className="menuLinkIcons" iconName="discover" />
                            {content.DISCOVER}
                        </Link>
                        <Link to="/feedback" className="menuLinks" onClick={handleClickMenuToggle}>
                            <Icon className="menuLinkIcons" iconName="feedback" />
                            {content.ORDER_FEEDBACK}
                        </Link>
                        <Link to="/history" className="menuLinks" onClick={handleClickMenuToggle}>
                            <Icon className="menuLinkIcons" iconName="history" />
                            {content.ORDER_HISTORY}
                        </Link>
                        <Link to="/settings" className="menuLinks" onClick={handleClickMenuToggle}>
                            <Icon className="menuLinkIcons" iconName="settings" />
                            {content.SETTINGS}
                        </Link>
                    </ul>
                    <ul className="moreBody">
                        <label className="menuLabel">
                            {content.MORE_LABEL}
                        </label>
                        <Link to="/preferences" className="menuLinks" onClick={handleClickMenuToggle}>
                            {content.MENU_MORE_1}
                        </Link>
                        <Link to="/give" className="menuLinks" onClick={handleClickMenuToggle}>
                            {content.MENU_MORE_2}
                        </Link>
                    </ul>
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.LOGOUT} onClick={() => {
                        window.localStorage.removeItem("x-access-token");
                        localStorage.removeItem("x-access-token");
                        localStorage.removeItem("isPremiumUser");
                        localStorage.removeItem("isFirstUserLogin");
                        history.push("/signin");
                        handleClickMenuToggle()
                    }}></Button>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;