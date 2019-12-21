import React from "react";
import cx from "classnames";
import content from "./content";
import { ReactComponent as Logo } from "../../assets/icon/Logo.svg";
import { ReactComponent as ListenMusic } from "../../assets/icon/ListenMusic.svg";
import { ReactComponent as MattersMost } from "../../assets/icon/MattersMost.svg";
import { ReactComponent as MusicianFirst } from "../../assets/icon/MusicianFirst.svg";
import { ReactComponent as SilverButton } from "../../assets/icon/SilverButton.svg";
import { ReactComponent as HearBk } from "../../assets/icon/hearbk.svg";

import "./LandingPage.style.scss";
import LandingPageFooter from "./LandingPageFooter";

const Component = (props) => {
  return (
    <div className="landingPageContainer">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="headingContainer">
        <div
          className="mainHeading"
          dangerouslySetInnerHTML={{ __html: content.MAIN_HEADING }}
        ></div>
        <div className="mainDescription">{content.MAIN_DESCRIPTION}</div>
        <div role="button" className="silverButtonContainer">
          <SilverButton className="silverButtonSvg" />
        </div>
      </div>
      <div className="listenMusicContainer">
        <div className="listenMusicIconContainer">
          <ListenMusic className="listenMusicIcon" />
        </div>
        <div className="listenMusicSubTitle">
          {content.LISTEN_MUSIC_SUBTITLE}
        </div>
        <div className="listenMusicHeader">{content.LISTEN_MUSIC_HEADER}</div>
        <div className="listenMusicDescription">
          {content.LISTEN_MUSIC_DESCRIPTION}
        </div>
      </div>
      <div className="matterMostContainer">
        <div className="matterMostIconContainer">
          <MattersMost className="matterMostIcon"/>
        </div>
        <div className="matterMostSubtitle">{content.MOST_MATTER_SUBTITLE}</div>
        <div className="matterMostHeader">{content.MOST_MATTER_HEADER}</div>
        <div className="matterMostDescription">{content.MOST_MATTER_DESCRIPTION}</div>
      </div>
      <div className="musicianFirstContainer">
        <div className="musicianFirstIcon"><MusicianFirst /></div>
        <div className="musicianFirstSubtitle">{content.MUSICIAN_FIRST_SUBTITLE}</div>
        <div className="musicianFirstHeader">{content.MUSICIAN_FIRST_HEADER}</div>
        <div className="musicianFirstDescription">{content.MUSICIAN_FIRST_DESCRIPTION}</div>
      </div>
      <div className="hearBKFooter"><HearBk /></div>
      <LandingPageFooter />
    </div>
  );
};

export default Component;
