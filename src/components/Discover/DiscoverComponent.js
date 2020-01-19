import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import cx from "classnames";
import content from "./content";
import "./Discover.styles.scss";
import Icon from "../../common/IconComponent";
import AudioPlayer from "../AudioPlayer";
import SwipeableCards from "../../common/SwipeableCards";
import { ENUMS } from "../../utils";
import Iframe from "../../common/Iframe";

const DiscoverComponent = ({ handleSwipeEnd, track }) => {
  const getComponent = useCallback(() => {
    const {
      trackUrl,
      mediaType,
      trackTitle,
      display_name,
      profile_image,
    } = track;

    const mediacomponent =
      mediaType === ENUMS.MEDIA_TYPE_YOUTUBE ? (
        <Iframe
          width=""
          height=""
          className="discoverIFrame"
          src={trackUrl}
          title="video-iframe"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></Iframe>
      ) : (
        <AudioPlayer src={trackUrl} />
      );

    return (
      <div className="songCardContainer">
        <Icon className={cx("bookmarkIcon")} iconName={"bookmark1"} />
        <div className="profilePicIconContainer">
          <img
            alt="profileImg"
            className={cx("profilePicIcon")}
            src={profile_image}
          />
        </div>
        <div className="artistTagContainer">{display_name}</div>
        <div className="songContainer">
          {mediacomponent}
          <div className="songTitle">{trackTitle}</div>
        </div>
      </div>
    );
  }, [track]);

  return (
    <div className="discoverComponentContainer">
      <Icon className={cx("backgroundIcon")} iconName={"Path85"} />
      <div className="discoverComponentHeader">
        <Icon className={cx("headerIcon")} iconName={"logo86"} />
        <div className="title1">{content.TITLE_1}</div>
        <div className="title2">{content.TITLE_2}</div>
      </div>
      {!isEmpty(track) ? <SwipeableCards
        className="songCardOuterContainer"
        swipeThreshold={75}
        onSwipeEnd={handleSwipeEnd}
      >
        {getComponent()}
      </SwipeableCards> : <h3 style={{color: "#FFF"}}>No more tracks to rate. Please come back later</h3>}
    </div>
  );
};

DiscoverComponent.defaultProps = {
  track: {}
};

export default DiscoverComponent;
