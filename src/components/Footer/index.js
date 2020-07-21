import React, { useEffect } from 'react';
import "./style.scss";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../../common/IconComponent";
import { connect } from 'react-redux';
import {
    getUserDetails,
} from "../../state/actions/userActions";
import { preferencsSelector } from "../../state/selectors/preferences";
import { ReactComponent as Home } from '../../assets/icon/home.svg';
import { ReactComponent as Music } from '../../assets/icon/music.svg';
import { ReactComponent as Business } from '../../assets/icon/business.svg';
import { ReactComponent as Social } from '../../assets/icon/social.svg';

const excludesRoutes = ["/", "/signin", "/forgot-password", "/reset", "/splash", "/loginScreen", "/signupScreen", "/emailSignup", "/emailSignin", "/emailReset",
"/changePassword", "/phoneSignup", "/phoneSignin", "/verifySignup", "/verifySignin" ];

const Footer = ({history, getUserDetailsDispatchAction, userDetails}) => {
    
    useEffect(() => {
        !excludesRoutes.includes(history.location.pathname) && getUserDetailsDispatchAction()
    }, [getUserDetailsDispatchAction, history.location.pathname]);

    return !excludesRoutes.includes(history.location.pathname) ? (
        <div className="footer-Container">
            <div className="footer-container-1">
                <NavLink to="/home" className="footer-Links">
                    <svg className="footer-Icon" > <Home /> </svg>
                </NavLink>
                <NavLink to="/upload" className="footer-Links">
                    <svg className="footer-Icon" > <Music /> </svg>
                </NavLink>
            </div>
            <NavLink to="/play" className="footer-Links-1">
                <Icon className="footer-Icon-1" iconName="app-icon" />
            </NavLink>
            <div className="footer-container-2">
                <NavLink to="/leaderboard-home" className="footer-Links">
                    <svg className="footer-Icon" > <Business /> </svg>
                </NavLink>
                <NavLink to="profile-settings" className="footer-Links">
                    <svg className="footer-Icon" > <Social /> </svg>
                </NavLink>
            </div>
        </div>
    ) : null;
}

const dispatchAction = (dispatch) => ({
    getUserDetailsDispatchAction: () => dispatch(getUserDetails()),
});

export default connect(
    (state) => ({
        ...preferencsSelector(state),
    }),
    dispatchAction
)(withRouter(Footer));