import React from 'react';
import "./PopUps.styles.scss";
import AddToHome from "../../containers/PopUps/AddToHome";
import Cookie from "../../containers/PopUps/Cookie";
import NewCard from "../../containers/PopUps/NewCard";

const PopUpsComponent = ({ 
    addToHome, 
    cookie,
    newCard
}) => {
    let component;
    if (addToHome) {
        component = <AddToHome />;
    } else if (cookie) {
        component = <Cookie />;
    } else if (newCard) {
        component = <NewCard />;
    } else {
        component = "";
    }

    return (
        <div className="popUpContainer">
            {component}
        </div>
    );
};

PopUpsComponent.defaultProps = {
    addToHome: true,
    cookie: false,
    newCard: false
}

export default PopUpsComponent;