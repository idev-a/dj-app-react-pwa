import React from 'react';
import content from "./content";
import "./styles.scss";
import DetailsForm from "../../../components/ListenerPreferences/DetailsForm";
import PriceForm from "../../../components/ListenerPreferences/PriceForm";

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
            <DetailsForm />
            <div className="priceContainer">
                <PriceForm />
            </div>
        </section>
    );
};

export default ListenerPreferencesForm;