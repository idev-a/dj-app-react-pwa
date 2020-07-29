import React from 'react';
import './alertContainer.scss';

const AlertContainer = ({alertTitle, handleOnClickButton, buttonText}) => {

    return (
        <div className="alert-main-container" >
            {alertTitle}
            <button className="alertButton" onClick={handleOnClickButton}>{buttonText}</button>
        </div>
    )
}

export default AlertContainer;