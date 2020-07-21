import React from 'react';
import './sucess.style.scss';
import { ReactComponent as GreenTick } from '../../../assets/icon/green_Tick.svg';
import Button from '../../../common/Button';
import content from '../content';

const UpgradeSucess = ({ onCloseSucess }) => {

    return (
        <div>
            <GreenTick className="business-and-finance-icon" />
            <br />
            <span className="payment-sucessful-txt">{content.UPGRADE_SUCESSFUL}</span><br />
            <Button
                className="sucess-button"
                buttonText={content.DONE}
                onClick={onCloseSucess}
            />
        </div>
    )
}

export default UpgradeSucess;