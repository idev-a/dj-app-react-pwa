import React from 'react';
import cx from "classnames";
import content from "./content";
import Icon from "../../common/IconComponent";
import "./Menu.styles.scss";
import HearBKHeader from "../../common/HearBKHeader";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const MenuComponent = ({
    handleClickMenuToggle,
    toggle
}) => {
    return (
        <div className="menuComponent">
            <div onClick={(e) => handleClickMenuToggle(e)} className="menuIconContainer">
                <Icon className={cx("menuIcon")} iconName="menu" />
            </div>
            <div className={`menuSideNav ${toggle}`}>
                <div onClick={(e) => handleClickMenuToggle(e)} className="cancelIconContainer">
                    <Icon className={cx("cancelIcon")} iconName="cancel" />
                </div>
                <HearBKHeader />
                <div className="menuBody">
                    <label className="menuLabel">
                        {content.MENU_LABEL}
                    </label>
                    <ul className="menuLinksList">
                        <Link to="/search" className="menuLinks">
                            <Icon className="menuLinkIcons menuSearchIcon" iconName="search" />
                            {content.SEARCH}
                        </Link>
                        <Link to="/discover" className="menuLinks">
                            <Icon className="menuLinkIcons" iconName="discover" />
                            {content.DISCOVER}
                        </Link>
                        <Link to="/feedback" className="menuLinks">
                            <Icon className="menuLinkIcons" iconName="feedback" />
                            {content.ORDER_FEEDBACK}
                        </Link>
                        <Link to="/order-history" className="menuLinks">
                            <Icon className="menuLinkIcons" iconName="history" />
                            {content.ORDER_HISTORY}
                        </Link>
                        <Link to="/settings" className="menuLinks">
                            <Icon className="menuLinkIcons" iconName="settings" />
                            {content.SETTINGS}
                        </Link>
                    </ul>
                    <label className="menuLabel">
                        {content.MORE_LABEL}
                    </label>
                    <ul className="menuMoreList">
                        <Link to="/preferences" className="menuLinks">
                            {content.MENU_MORE_1}
                        </Link>
                        <Link to="" className="menuLinks">
                            {content.MENU_MORE_2}
                        </Link>
                        <Link to="" className="menuLinks">
                            {content.MENU_MORE_3}
                        </Link>
                    </ul>
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.LOGOUT} ></Button>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;