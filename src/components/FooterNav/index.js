import React from "react";
import "./styles.scss";
import { NavLink, withRouter } from "react-router-dom";
import Icon from "../../common/IconComponent";

const excludedRoutes = ["/", "/signin"];

const FooterNav = props => {
  console.log(props.history);
  return !excludedRoutes.includes(props.history.location.pathname) ? (
    <div className="footerContainer">
      <NavLink to="/search" className="footerLinks">
        <Icon className="footerIcon search" iconName="search" />
      </NavLink>
      <NavLink to="/discover" className="footerLinks">
        <Icon className="footerIcon" iconName="discover" />
      </NavLink>
      <NavLink to="/feedback" className="footerLinks">
        <Icon className="footerIcon" iconName="feedback" />
      </NavLink>
      <NavLink to="/history" className="footerLinks">
        <Icon className="footerIcon" iconName="history" />
      </NavLink>
      <NavLink to="/preferences" className="footerLinks">
        <Icon className="footerIcon" iconName="settings" />
      </NavLink>
    </div>
  ) : null;
};

export default withRouter(FooterNav);
