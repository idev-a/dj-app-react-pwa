import React from 'react';
import './LandingPageFooter.styles.scss';
import content from './content';
import IconComponent from '../../../common/IconComponent';
import { Link } from "react-router-dom";

const LandingPageFooter = () => {
    return (
        <div className="landingPageFooterContainer">
            <div className="socialMediaActionContainer">
                <IconComponent iconName="facebook" className="socialMediaIcon"/>
                <IconComponent iconName="twitter" className="socialMediaIcon"/>
                <IconComponent iconName="youtube" className="socialMediaIcon"/>
            </div>
            <div className="footerMenuContainer">
                <div className="footerMenuColumn">
                    <Link to="/hq/about-us/">{content.ABOUT_US}</Link>
                    <Link to="/hq/manage-preferences/">{content.MANAGE_PREFERENCES}</Link>
                    <Link to="/hq/terms-conditions/">{content.TERMS_AND_CONDITIONS}</Link>
                </div>
                <div className="footerMenuColumn">
                    <Link to="/hq/cookie-policy/">{content.COOKIE_POLICY}</Link>
                    <Link to="/hq/privacy-policy/">{content.PRIVACY_POLICY}</Link>
                    <Link to="/hq/refund-policy/">{content.REFUND_POLICY}</Link>
                </div>
            </div>
        </div>
    )
};

export default LandingPageFooter;