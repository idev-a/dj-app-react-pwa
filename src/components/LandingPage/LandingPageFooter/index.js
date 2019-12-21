import React from 'react';
import './LandingPageFooter.styles.scss';
import content from './content';
import IconComponent from '../../../common/IconComponent';

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
                    <div>{content.ABOUT_US}</div>
                    <div>{content.MANAGE_PREFERENCES}</div>
                    <div>{content.TERMS_AND_CONDITIONS}</div>
                </div>
                <div className="footerMenuColumn">
                    <div>{content.COOKIE_POLICY}</div>
                    <div>{content.PRIVACY_POLICY}</div>
                    <div>{content.REFUND_POLICY}</div>
                </div>
            </div>
        </div>
    )
};

export default LandingPageFooter;