import React from 'react';
import content from "./content";
import "./styles.scss";
import Button from "../../../common/Button";
import PaymentCard from "./PaymentCard";

const PaymentAccountForm = ({ toggleExpand }) => {
    return (
        <section className="formContainer">
            <header onClick={(e) => toggleExpand(e)} className="formHeaderContainer">
                <span className="expandIcon">
                    +
                </span>
                <div className="formHeaderText">
                    {content.SUBCONTAINER3_LABEL}
                </div>
            </header>
            <div className="paymentCardsContainer">
                <PaymentCard />
            </div>
            <div className="buttonWrapper">
                <Button className="launchButton" buttonText={content.SUBCONTAINER3_BUTTON_TEXT} ></Button>
            </div>
        </section>
    );
};

export default PaymentAccountForm;