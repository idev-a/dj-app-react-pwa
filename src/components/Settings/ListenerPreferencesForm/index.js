import React from 'react';
import content from "./content";
import "./styles.scss";
import Details from "../../../containers/ListenerPreferences/Details";
import Price from "../../../containers/ListenerPreferences/Price";

const ListenerPreferencesForm = ({ toggleExpand }) => {
    return (
        <section className="formContainer">
            <header onClick={(e) => toggleExpand(e)} className="formHeaderContainer">
                <span className="expandIcon">
                    +
                </span>
                <div className="formHeaderText">
                    {content.SUBCONTAINER5_LABEL}
                </div>
            </header>
            <Details />
            <div className="priceContainer">
                <Price />
            </div>
        </section>
    );
};

export default ListenerPreferencesForm;