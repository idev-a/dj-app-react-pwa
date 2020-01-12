import React from 'react';
import content from "./content";
import "./styles.scss";
import DetailsContainer from "../../../containers/ListenerPreferences/Details";
import PriceContainer from "../../../containers/ListenerPreferences/Price";

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
            <DetailsContainer />
            <div className="priceContainer">
                <PriceContainer />
            </div>
        </section>
    );
};

export default ListenerPreferencesForm;