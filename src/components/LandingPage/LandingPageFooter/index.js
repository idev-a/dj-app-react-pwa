import React from 'react';
import { ReactComponent as FacebookIcon } from "../../../assets/icon/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/icon/twitter.svg";
import { ReactComponent as YouTubeIcon } from "../../../assets/icon/youtube.svg";
import './LandingPageFooter.styles.scss';
import content from './content';

const LandingPageFooter = () => {
    return (
        <div className="landingPageFooterContainer">
            <div className="socialMediaActionContainer">
                <div><FacebookIcon /></div>
                <div><TwitterIcon /></div>
                <div><YouTubeIcon /></div>
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