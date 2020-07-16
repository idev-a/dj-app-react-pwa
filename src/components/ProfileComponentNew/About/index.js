import React from 'react';
import './profileAbout.style.scss';
import content from './content'
import { ReactComponent as Pin } from '../../../assets/icon/pin.svg';

const About = ({ userDetails }) => {
    return (
        <div className="profile-about-main-container">
            <div className="profile-about-location-container">
                <Pin className="location-icon" />
                <small className="location-text" >{userDetails ?.city}</small>
            </div>
            <div className="profile-bio-container">
                <span>{content.BIO}</span>
                <p className="profile-bio-content">{userDetails ?.bio}</p>
            </div>
            <div className="profile-experience-container">
                <span>{content.EXPERIENCE}</span>
                <div className="experience-line-container">
                    <div className="experience-growth-container">
                        <hr className="hrTag" />
                        <div className="hr-tag-circle" />
                    </div>
                    <div className="profile-experience-detail-container">
                        <span className="profile-eperience-txt">Influencer</span><br />
                        <span className="profile-experience-app-name">BREAKER</span><br />
                        <small className="profile-experience-date-text">May 2020 - Present</small>
                    </div>
                </div>
            </div>
            <div className="profile-bio-container">
                <span>{content.ROLES}</span>
                <div className="profile-roles-tags-container">
                    {userDetails ?.listener_tags.map((data) => {
                        return <div className="profile-roles-tags">{data?.tag}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;