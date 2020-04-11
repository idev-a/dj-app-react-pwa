import React from 'react';
import "./styles.scss";
import content from "./content";
import Icon from "../../../common/IconComponent";
import Button from "../../../common/Button";

const SelectedListeners = () => {
    return (
        <section className="selectedListenersContainer">
            <header className="selectedHeader">{content.SELECTED}<span className="listenersHeader">&nbsp;{content.LISTENERS}</span></header>
            <label htmlFor="selectedListeners" className="selectedListenersLabel">{content.YOUR_SELECTED_LISTENERS}</label>
            <div className="iconContainer">
                <Icon className="closeIcon" iconName="close" />
                <Icon className="selectedListenerPicture" iconName="profilepic" />
                <label htmlFor="selectedListenerPicture" className="pictureLabel">Vess Dynamic</label>
            </div>
            <div className="buttonWrapper">
                <Button
                    className="editListenersButton"
                    onClick={""}
                    buttonText={content.EDIT_LISTENERS}
                />
            </div>
        </section>
    );
};

export default SelectedListeners; 