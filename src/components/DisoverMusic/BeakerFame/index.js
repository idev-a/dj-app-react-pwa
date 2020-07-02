import React from 'react';
import './breakerFame.style.scss';
import content from './content';
import { ReactComponent as Polygon } from '../../../assets/icon/Polygon.svg';
import { ReactComponent as PolygonBack } from '../../../assets/icon/Polygon 3.svg';
import { ReactComponent as MoneyBag } from '../../../assets/icon/MoneyBag.svg';


const BeakerFame = () => {

    return (
        <section className="breaker-fame-main-container">
            <div className="breaker-fame-inner-container">
                <div className="breaker-fame-eclipse" />
                <div className="breaker-fame-triangles-main-container">
                    <div className="breaker-fame-polygon-container" >
                        <Polygon className="polygon-gradient" />
                        <PolygonBack />
                        <small className="polygon-text">{content.MOGUL}</small>
                    </div>
                    <MoneyBag className="breaker-fame-moneybag-icon" />
                    <div className="polygon-container-row-2">
                        <div className="breaker-fame-polygon-container">
                            <Polygon className="polygon-gradient" />
                            <PolygonBack />
                            <small className="polygon-text">{content.MUSIC}</small>
                        </div>
                        <div className="breaker-fame-polygon-container">
                            <Polygon className="polygon-gradient" />
                            <PolygonBack />
                            <small className="polygon-text">{content.BUSINESS}</small>
                        </div>
                    </div>
                </div>
            </div>
            <section className="discover-music-text-container">
                <span className="discover-music-text">{content.GAIN_BREAKER_FAME}</span>
            </section>
            <p className="discover-music-content-text">{content.PROMOTE_MUSIC_TXT}</p>
        </section>
    )
}

export default BeakerFame;