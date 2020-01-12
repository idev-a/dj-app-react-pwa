import React, { useState } from "react";
import cx from "classnames";
import content from "./content";
import "./Discover.styles.scss";
import Icon from "../../common/IconComponent";
import { Swipeable as SwipeableViews } from "react-swipeable";
import data from "./data";
import AudioPlayer from "../AudioPlayer";

const DiscoverComponent = (props) => {
  const songCardComponentArray = data.map((card, i) => {
    let mediaContents;
    if (card.type === "audio") {
      mediaContents = (
        <AudioPlayer src="https://gateway.pinata.cloud/ipfs/QmP1xoeYrcDzcKqMhRZmnDxjHCR3mumJTGqw1JFc2zRs6n" />
      );
    } else {
      mediaContents = (
        <iframe
          width=""
          height=""
          className="discoverIFrame"
          src={card.src}
          title="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    }

    const styles = {
      slide: {
        minHeight: 100,
      },
    };

    return (
      <div
        className="songCardOuterContainer"
        style={Object.assign({}, styles.slide, styles.slide)}
        key={i}
      >
        <div className="songCardContainer">
          <Icon className={cx("bookmarkIcon")} iconName={"bookmark1"} />
          <div className="profilePicIconContainer">
            <Icon className={cx("profilePicIcon")} iconName={card.iconName} />
          </div>
          <div className="artistTagContainer">{card.tag}</div>
          <div className="songContainer">
            <AudioPlayer src="https://gateway.pinata.cloud/ipfs/QmP1xoeYrcDzcKqMhRZmnDxjHCR3mumJTGqw1JFc2zRs6n" />
            <div className="songTitle">{card.songTitle}</div>
            <div className="songLength">{card.songLength}</div>
          </div>
        </div>
      </div>
    );
  });
  const containerStyle = {
    height: "100%",
    width: "100%",
    transition: "transform 1s ease-in",
  };
  const [componentIndex, setComponentIndex] = useState(0);
  const [style, setStyle] = useState(containerStyle);
  return (
    <div className="discoverComponentContainer">
      <Icon className={cx("backgroundIcon")} iconName={"Path85"} />
      <div className="discoverComponentHeader">
        <Icon className={cx("headerIcon")} iconName={"logo86"} />
        <div className="title1">{content.TITLE_1}</div>
        <div className="title2">{content.TITLE_2}</div>
      </div>
      <SwipeableViews
        rotationAngle={10}
        style={containerStyle}
        onSwiping={() => {
            setStyle({
                ...containerStyle,
                transform: "rotate(15deg)"
            })
        }}
        preventDefaultTouchmoveEvent
        trackMouse
        trackTouch
        onSwiped={() => {
          console.log("swiping");
          setStyle(containerStyle   )
          setComponentIndex(componentIndex + 1);
        }}
      >
        {songCardComponentArray[componentIndex]}
      </SwipeableViews>
    </div>
  );
};

DiscoverComponent.defaultProps = {};

export default DiscoverComponent;
