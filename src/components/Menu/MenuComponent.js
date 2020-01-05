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
                <Icon className={cx("menuIcon")} iconName={"menu"} />
            </div>
            <div className={`menuSideNav ${toggle}`}>
                <div onClick={(e) => handleClickMenuToggle(e)} className="cancelIconContainer">
                    <Icon className={cx("cancelIcon")} iconName={"cancel"} />
                </div>
                <HearBKHeader />
                <ul className="menuLinksList">
                    <li className="menuLinksLis">
                        <Link to="/discover" className="menuLinks">
                            {content.DISCOVER}
                        </Link>
                    </li>
                    <li className="menuLinksLis">
                        <Link to="/preferences" className="menuLinks">
                            {content.LISTENER_PREFERENCES}
                        </Link>
                    </li>
                    <li className="menuLinksLis">
                        <Link to="/feedback" className="menuLinks">
                            {content.ORDER_FEEDBACK}
                        </Link>
                    </li>
                    <li className="menuLinksLis">
                        <Link to="/settings" className="menuLinks">
                            {content.SETTINGS}
                        </Link>
                    </li>
                </ul>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.LOGOUT} ></Button>
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;