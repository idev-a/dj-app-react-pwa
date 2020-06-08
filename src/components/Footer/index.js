import React from 'react';
import "./style.scss";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../../common/IconComponent";
import { ReactComponent as Home } from '../../assets/icon/home.svg';
import { ReactComponent as Music } from '../../assets/icon/music.svg';
import { ReactComponent as Business } from '../../assets/icon/business.svg';
import { ReactComponent as Social } from '../../assets/icon/social.svg';

const includeRoutes = ["/home", "/profile-settings", "/upgrade", "/result", "/leaderboard-home"];

const Footer = props => {

    return includeRoutes.includes(props.history.location.pathname) ? (
        <div className="footer-Container">
            <div className="footer-container-1">
                <NavLink to="/home" className="footer-Links">
                    <svg className="footer-Icon" > <Home /> </svg>
                </NavLink>
                <NavLink to="/upgrade" className="footer-Links">
                    <svg className="footer-Icon" > <Music /> </svg>
                </NavLink>
            </div>
            <NavLink to="/feedback" className="footer-Links-1">
                <Icon className="footer-Icon-1" iconName="app-icon" />
            </NavLink>
            <div className="footer-container-2">
                <NavLink to="/leaderboard-home" className="footer-Links">
                    <svg className="footer-Icon" > <Business /> </svg>
                </NavLink>
                <NavLink to="/profile-settings" className="footer-Links">
                    <svg className="footer-Icon" > <Social /> </svg>
                </NavLink>
            </div>
        </div>
    ) : null;
}

export default withRouter(Footer);