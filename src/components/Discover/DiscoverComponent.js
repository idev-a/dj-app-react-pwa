import React from 'react';
import cx from "classnames";
import content from "./content";
import "./Discover.styles.scss";
import Icon from "../../common/IconComponent";
import SwipeableViews from "react-swipeable-views";
import data from "./data";
import audioplayer from "./audioplayer.png";

const DiscoverComponent = (props) => {

    const songCardComponentArray = data.map((card, i) => {

        let mediaContents;
        if (card.type === "audio") {
            mediaContents = 
            <div className="discoverAudioPlayer">
                <img src={audioplayer} width="90%" height="auto" />
                <audio 
                    id="audiotag1" 
                    src="./sample.mp3" 
                    preload="auto">
                </audio>
            </div>
        } else {
            mediaContents = 
            <iframe 
                width="" 
                height="" 
                className="discoverIFrame"
                src={card.src} 
                title="video-iframe"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        };

        const styles = {
            slide: {
                minHeight: 100
            }
        }

        return (
            <div className="songCardOuterContainer" style={Object.assign({}, styles.slide, styles.slide)} key={i}>
                <div className="songCardContainer">
                    <Icon className={cx("bookmarkIcon")} iconName={"bookmark1"} />
                    <div className="profilePicIconContainer">
                        <Icon className={cx("profilePicIcon")} iconName={card.iconName} />
                    </div>
                    <div className="artistTagContainer">
                        {card.tag}
                    </div>
                    <div className="songContainer">
                        {mediaContents}
                        <div className="songTitle">
                            {card.songTitle}
                        </div>
                        <div className="songLength">
                            {card.songLength}
                        </div>
                    </div>
                </div>
            </div>
        );

    })

    return (
        <div className="discoverComponentContainer">
            <Icon className={cx("backgroundIcon")} iconName={"Path85"} />
            <div className="discoverComponentHeader">
                <Icon className={cx("headerIcon")} iconName={"logo86"} />
                <div className="title1">
                    {content.TITLE_1}
                </div>
                <div className="title2">
                    {content.TITLE_2}
                </div>
            </div>
            <SwipeableViews enableMouseEvents>
                {songCardComponentArray}
            </SwipeableViews>
        </div>
    );
};

DiscoverComponent.defaultProps = {

};

export default DiscoverComponent;