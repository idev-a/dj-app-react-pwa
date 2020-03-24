import React, { useState } from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";

const Location = ({
    city
}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="formContainer">              
            <header onClick={() => setIsOpen(!isOpen)} className="formHeaderContainer">
                <span className="expandIcon">
                    {!isOpen ? "+" : "-"}
                </span>
                <div className="formHeaderText">
                    {content.LOCATION}
                </div>
            </header>
            {isOpen && (
                <div className="formInputContainer">
                    <label htmlFor="location" className="formInputLabel">{content.CURRENT_LOCATION}</label>
                    <div className="formInputSubContainer">
                        <Icon className="locationIcon" iconName="location" />
                        <InputField
                            id="location"
                            className="formInputField"
                            value={city}
                            placeholder=""
                            disabled={true}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Location;