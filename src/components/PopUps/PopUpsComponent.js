import React from 'react';
import "./PopUps.styles.scss";
import Icon from "../../common/IconComponent";
import AddToHome from "./AddToHome";
import Cookie from "./Cookie";
import NewCard from "./NewCard";
import OrderProcessing from "./OrderProcessing";
import Success from "./Success";

const PopUpsComponent = ({ 
    name
}) => {
    return (
        <div className="popUpContainer">
            <div className="iconContainer">
                <Icon className="headerIcon" iconName="logo_hexagon" />
                <Icon className="cancelIcon" iconName="cancel" />
            </div>
            {
                name === "addToHome" ? <AddToHome /> : 
                name === "cookie" ? <Cookie /> :
                name === "newCard" ? <NewCard /> : 
                name === "orderProcessing" ? <OrderProcessing /> : 
                name === "success" ? <Success /> : ""
            }
        </div>
    );
};

PopUpsComponent.defaultProps = {

}

export default PopUpsComponent;