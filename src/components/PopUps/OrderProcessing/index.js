import React from 'react';
import content from "./content";
import "./styles.scss";
import Icon from "../../../common/IconComponent"

const OrderProcessing = (props) => {
    return (
        <div className="orderProcessingContainer">
            <Icon className="refreshIcon" iconName="refresh" />
            <p className="processingLabel">{content.PROCESSING}</p>
        </div>
    );
};

OrderProcessing.defaultProps = {

};

export default OrderProcessing;