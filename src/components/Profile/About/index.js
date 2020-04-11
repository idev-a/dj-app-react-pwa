import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import InputField from "../../../common/InputField";
import Icon from "../../../common/IconComponent";

const About = ({
    bio
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="formContainer">              
            <header onClick={() => setIsOpen(!isOpen)} className="formHeaderContainer">
                <span className="expandIcon">
                    {!isOpen ? "+" : "-"}
                </span>
                <div className="formHeaderText">
                    {content.ABOUT}
                </div>
            </header>
            {isOpen && (
                <div className="formInputContainer">
                    <label htmlFor="bio" className="formInputLabel">
                        {content.BIO}
                    </label>
                    <InputField 
                        id="bio"
                        className="formInputField"
                        placeholder=""
                        value={bio}
                        disabled={true}
                    />
                    {/* <div className="experienceContainer">
                        {editIsOpen && (
                            <Icon className="addCircleGreenIcon" iconName="AddCircleGreen" />
                        )}
                        <label htmlFor="experience" className="formInputLabel">
                            {content.EXPERIENCE}
                        </label>
                        <div className="experience">
                            <span className="title">{content.ROLE_TITLE}</span>&nbsp;
                            <span className="companyTag">@companyname</span>
                            <div className="dateRange">March 2015 - February 2017</div>
                        </div>
                    </div> */}
                </div>
            )}
        </section>
    );
};

export default About;