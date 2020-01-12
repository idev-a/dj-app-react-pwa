import React from 'react';
import cx from "classnames";
import "./PopUps.styles.scss";
import AddToHome from "../../containers/PopUps/AddToHome";
import Cookie from "../../containers/PopUps/Cookie";
import NewCard from "../../containers/PopUps/NewCard";
import Icon from "../../common/IconComponent";

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
            <div className="iconContainer">
                <Icon className={cx("headerIcon")} iconName={"logo_hexagon"} />
                <Icon className={cx("cancelIcon")} iconName={"cancel"} />
            </div>
            {component}
        </div>
    );
};

PopUpsComponent.defaultProps = {
    addToHome: false,
    cookie: true,
    newCard: false
}

export default PopUpsComponent;