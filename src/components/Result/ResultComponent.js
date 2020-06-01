import React from 'react';
import './result.style.scss';
import content from './content';
import { ReactComponent as MoneyBag } from '../../assets/icon/MoneyBag.svg';
import { ReactComponent as FireIcon } from '../../assets/icon/FireIcon.svg';
import { ReactComponent as Key } from '../../assets/icon/access.svg';
import Button from './../../common/Button';
import PromoCard from './PromoCard';

const ResultComponent = () => {

    return (
        <div className="result-main-component">
            <div className="result-header-container">
                <div className="app-name-container">
                    <span className="app-display-name">{content.UPLOAD}</span><br />
                </div>
                <div className="header-icon-container">
                    <MoneyBag />
                    <div className="header-icon-text-container">
                        <p className="coin-number">1.2</p><p className="coin-text">{content.COIN}</p>
                    </div>
                    <FireIcon />
                    <div className="header-icon-text-container" >
                        <p className="coin-number">Lv.3</p><p className="coin-text">{content.RATER}</p>
                    </div>
                </div>
            </div>
            <div className="buttons-main-component">
                <Button
                    className="upload-button"
                    buttonText="Upload"
                // onClick={onSubmitFeedback}
                ></Button>
                <Button
                    className="results-button"
                    buttonText="Results"
                // onClick={onSubmitFeedback}
                ></Button>
            </div>
            <div className="key-button-container">
                <Key className="key-icon" />
                <span className="key-number-text">x 1</span>
            </div>
            <span className="promo-campaign-txt">{content.PROMO_CAMPAIGN}</span>
            <div className="cards-main-container">
                <PromoCard hasKey={true} />
                <PromoCard hasFeedback={true} />
            </div>
            <Button
                className="upgrade-unlock"
                buttonText={content.UPGRADE_TO_UNLOCK}
            // onClick={onSubmitFeedback}
            ></Button>
        </div>
    )
}

export default ResultComponent;