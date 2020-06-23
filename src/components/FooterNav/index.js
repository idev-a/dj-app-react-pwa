import React from "react";
import "./styles.scss";
import { NavLink, withRouter } from "react-router-dom";
import { HomeIcon, MusicIcon, BusinessIcon, UserIcon } from './../../assets/icon/svgicon';

const excludedRoutes = ["/", "/signin", "/forgot-password", "/reset"];

const FooterNav = props => {
  console.log(props.history);
  return !excludedRoutes.includes(props.history.location.pathname) ? (
    <div className="footerContainer">
      <NavLink to="/search" className="footerLinks">
        <svg className="home-icon"><HomeIcon /></svg>
      </NavLink>
      <NavLink to="/discover" className="footerLinks">
        <svg className="music-icon"><MusicIcon /></svg>
      </NavLink>
      <span class="play-circle">
        <NavLink to="/feedback" className="footerLinks">
          <div className="play-icon-div">
            <div className="play-main-container">
                <div className="play-container" />
            </div>
          </div>
        </NavLink>
      </span>
      <NavLink to="/leaderboard" className="footerLinks">
        <svg className="business-icon"><BusinessIcon /></svg>
      </NavLink>
      <NavLink to="/preferences" className="footerLinks">
        <svg className="user-icon"><UserIcon /></svg> 
      </NavLink>
    </div>
  ) : null;
};

export default withRouter(FooterNav);
