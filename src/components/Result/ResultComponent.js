import React from 'react';
import './result.style.scss';
import content from './content';
import { ReactComponent as Key } from '../../assets/icon/access.svg';
import Button from './../../common/Button';
import PromoCard from './PromoCard';
import history from "../../history";

const ResultComponent = ({ tracksHistory }) => {

    return (
        <section>
            <div className="key-button-container">
                <Key className="key-icon" />
                <span className="key-number-text">x 1</span>
            </div>
            <span className="promo-campaign-txt">{content.PROMO_CAMPAIGN}</span>
            <div className="cards-main-container">
                {tracksHistory.trackStats && tracksHistory.trackStats.map((data) => (
                    <PromoCard cardData={data}/>
                ))}
                {/* <PromoCard hasKey={true} />
                <PromoCard hasFeedback={true} /> */}
            </div>
            <Button
                className="upgrade-unlock"
                buttonText={content.UPGRADE_TO_UNLOCK}
                onClick={() => history.push("/upgrade")}
            ></Button>
        </section>
    )
}

export default ResultComponent;