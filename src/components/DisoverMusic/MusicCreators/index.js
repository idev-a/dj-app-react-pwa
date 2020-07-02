import React from 'react';
import './musicCreators.styles.scss';
import IMG1 from '../../../assets/img/discoverMusic/MusicCreator-1.png';
import IMG2 from '../../../assets/img/discoverMusic/MusicCreator-2.png';
import IMG3 from '../../../assets/img/discoverMusic/MusicCreator-3.png';
import { ReactComponent as MessageGray } from '../../../assets/icon/MessageGray.svg';
import { ReactComponent as MessagePink } from '../../../assets/icon/MessagePink.svg';
import content from './content';

const MusicCreators = () => {

    return (
        <section className="music-creator-main-container">
            <div className="music-creators-images-container">
                <img src={IMG2} alt="No Img" className="music-creators-image" />
                <img src={IMG3} alt="No Img" className="music-creators-image" />
                <div className="music-creators-icon-container">
                    <MessagePink className="music-creator-icon" />
                    <MessageGray className="music-creator-icon" />
                </div>
                <img src={IMG1} alt="No Img" className="music-creators-image" />
            </div>
            <section className="discover-music-text-container">
                <span className="discover-music-text">{content.MUSIC_CREATORS}</span>
            </section>
            <p className="discover-music-content-text">{content.FIND_YOUR_FIRST_TXT}</p>
        </section>
    )
}

export default MusicCreators;