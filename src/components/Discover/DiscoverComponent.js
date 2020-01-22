import React, { useCallback } from "react";
import isEmpty from "lodash/isEmpty";
import content from "./content";
import "./Discover.styles.scss";
import Icon from "../../common/IconComponent";
import AudioPlayer from "../AudioPlayer";
import SwipeableCards from "../../common/SwipeableCards";
import { ENUMS } from "../../utils";
import Iframe from "../../common/Iframe";
import FooterNav from "../FooterNav";
import Menu from "../Menu";

const DiscoverComponent = ({ handleSwipeEnd, track, menuIsOpen, handleClickMenuToggle }) => {
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
        <Icon className="bookmarkIcon" iconName="bookmark1" />
        <div className="profilePicIconContainer">
          <img
            alt="profileImg"
            className="profilePicIcon"
            src={profile_image}
          />
        </div>
        <div className="artistTagContainer">{display_name}</div>
        <div className="songContainer">
          {mediacomponent}
          <div className="songTitle">{trackTitle}</div>
        </div>
        <div className="iconContainerHeader">{content.ICON_CONTAINER_HEADER}</div>
        <div className="iconContainer">
          <div className="iconCols">
            <Icon className="ratingIcons" iconName="thumbs_down" />
            <div className="ratingLabels">{content.MISS}</div>
          </div>
          <div className="iconCols">
            <Icon className="ratingIcons" iconName="thumbs_up_down" />
            <div className="ratingLabels">{content.POTENTIAL}</div>
          </div>
          <div className="iconCols">
            <Icon className="ratingIcons" iconName="thumbs_up_blue" />
            <div className="ratingLabels selected">{content.HIT}</div>
          </div>
        </div> 
      </div>
    );
  }, [track]);

  return (
    <div className="discoverComponentContainer">
      <Icon className="backgroundIcon" iconName="Path85" />
      <div className="discoverComponentHeader">
        {/* <div onClick={() => handleClickMenuToggle(!menuIsOpen)} className="menuIconContainer">
          <Icon iconName="menu_white" className="menuIcon" />
        </div>
        {menuIsOpen && (
          <Menu handleClickMenuToggle={handleClickMenuToggle} />
        )} */}
        <Icon className="headerIcon" iconName="logo86" />
        <div className="title1">{content.TITLE_1}</div>
        <div className="title2">{content.TITLE_2}</div>
      </div>
      {!isEmpty(track) ? <SwipeableCards
        className="songCardOuterContainer"
        swipeThreshold={125}
        onSwipeEnd={handleSwipeEnd}
      >
        {getComponent()}
      </SwipeableCards> : <h3 style={{color: "#FFF"}}>No more tracks to rate. Please come back later</h3>}
      <FooterNav />
    </div>
  );
};

DiscoverComponent.defaultProps = {
  track: {}
};

export default DiscoverComponent;
