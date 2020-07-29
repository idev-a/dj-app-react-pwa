import React, { useState, useCallback } from 'react';
import content from './content';
import './DiscoverMusic.styles.scss';
import cx from 'classnames';
import history from "../../history";
import { ReactComponent as Back } from '../../assets/icon/back.svg';
import DiscoverNewMusic from './DiscoverNewMusic';
import MusicInfluencer from './MusicInfluencer';
import BeakerFame from './BeakerFame';
import MusicCreators from './MusicCreators';

const DiscoverMusicContainer = () => {

    const [currentScreen, setCurrentScreen] = useState(0);

    const handleOnClickBack = useCallback(() => {
        if (currentScreen > 0) {
            setCurrentScreen(currentScreen - 1)
        }
    }, [currentScreen])

    const handleOnClickNext = useCallback(() => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1)
        } else {
            history.push('/splash')
        }
    }, [currentScreen])

    const handleOnClickSkip = () => {
        history.push('/splash')
    }

    return (
        <div className="discover-music-container">
            <section className="discover-music-container-section-1">
                <small className="discover-skip-text" onClick={handleOnClickSkip}>{content.SKIP}</small>
                <div className="discover-logo-container">
                    <div className="discover-logo-content" />
                    <span className="discover-breaker-text">{content.BREAKER}</span>
                </div>
            </section>
            {currentScreen === 0 && <DiscoverNewMusic />}
            {currentScreen === 1 && <MusicInfluencer />}
            {currentScreen === 2 && <BeakerFame />}
            {currentScreen === 3 && <MusicCreators />}
            <section className="discover-music-footer-container">
                {currentScreen !== 0 ? <Back className="discover-back-icon" onClick={handleOnClickBack} /> : <div className="discover-back-icon" />}
                <div className="progress-dots-container">
                    {[...Array(4)].map((e, i) => {
                        return <div className={cx("progress-dots", i === currentScreen && "progress-dot-red")} />
                    })}
                </div>
                <span onClick={handleOnClickNext}>{content.NEXT}</span>
            </section>
        </div>
    )
}

export default DiscoverMusicContainer;