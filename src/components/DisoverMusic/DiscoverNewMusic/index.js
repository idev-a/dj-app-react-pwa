import React from 'react';
import '../DiscoverMusic.styles.scss';
import IMG1 from '../../../assets/img/discoverMusic/discover-1.png';
import IMG2 from '../../../assets/img/discoverMusic/discover-2.png';
import IMG3 from '../../../assets/img/discoverMusic/discover-3.png';
import content from '../content';

const DiscoverNewMusic = () => {

    return (
        <section>
            <section>
                <div className="discover-music-image-container">
                    <div className="discover-image-container">
                        <img src={IMG3} alt="No Img" className="discover-sideImages" />
                    </div>
                    <div className="discover-image-container">
                        <img src={IMG1} alt="No Img" className="discover-centerImages" />
                        <div className="discover-image-title">
                            <small>{content.CANCELLED}</small><br />
                            <small className="dicover-creator-name">{content.ABE}</small>
                        </div>
                    </div>
                    <div className="discover-image-container">
                        <img src={IMG2} alt="No Img" className="discover-sideImages" />
                        <div className="discover-image-title-2">
                            <small>{content.ZONE}</small><br />
                            <small className="dicover-creator-name">{content.ABE}</small>
                        </div>
                    </div>
                </div>
            </section>
            <section className="discover-music-text-container">
                <span className="discover-music-text">{content.DISCOVER_NEW_MUSIC}</span>
            </section>
            <p className="discover-music-content-text">{content.FIND_YOUR_NEXT}</p>
        </section>
    )
}

export default DiscoverNewMusic;