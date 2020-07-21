import React from 'react';
import './sucess.style.scss';
import { ReactComponent as Business } from '../../../assets/icon/business-and-finance.svg';
import { ReactComponent as CardRed } from '../../../assets/icon/business-and-finance-red.svg';
import Button from '../../../common/Button';
import content from '../content';

const SucessUnsuccessContainer = ({ onCloseSucess, sucess }) => {

    return (
        <div>
            {sucess ?
                <Business className="business-and-finance-icon" /> :
                <CardRed className="business-and-finance-icon" />
            }
            <br />
            <span className="payment-sucessful-txt">{sucess ? content.PAYMENT_SUCESSFUL : content.UNSUCESSFUL}</span><br />
            <Button
                className="sucess-button"
                buttonText={sucess ? content.DONE : content.RETRY}
                onClick={onCloseSucess}
            />
        </div>
    )
}

export default SucessUnsuccessContainer;