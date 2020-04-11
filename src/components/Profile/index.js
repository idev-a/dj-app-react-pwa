import React, { useContext } from "react";
import "./styles.scss";
import content from "./content";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import SendMe from "./SendMe";
import About from "./About";
import Favorites from "./Favorites";
import Location from "./Location";
import Roles from "./Roles";
import HearBKIcon from "../../common/HearBKIcon";
import { MenuHandlerContext } from "../../routes";
import ListenerRatings from "./ListenerRatings";
import Ratings from "../../common/Ratings";
import ProfileImage from "../ProfileImage";

const Profile = ({
  profileDetails,
  userName,
  onShareProfileClick,
  handleConnectClick,
}) => {
  const menuClickHandler = useContext(MenuHandlerContext);

  return (
    <div className="profileContainer">
      <div className="largeHeaderBackground"></div>
      <div className="headerBackgroundColor"></div>
      <header className="headerContainer">
        <div className="iconContainer">
          <Button
            isIcon
            className="menuIcon"
            iconName="menu_white"
            onClick={menuClickHandler}
          />
        </div>
        {/* <div className="buttonContainer">
          <Button
            className="editButton"
            onClick={() => setEditIsOpen(!editIsOpen)}
            buttonText={editIsOpen ? content.DONE : content.EDIT}
          />
        </div> */}
        <div className="headerTitleContainer">
          <div className="headerTitle">{profileDetails?.display_name}</div>
          {/* <Icon className="headerIcon" iconName="profile_header_icon" /> */}
        </div>
        <div className="headerTag">{`@${userName}`}</div>
        <div className="profilePicContainer">
          <Button
            className="shareButton"
            onClick={onShareProfileClick}
            isIcon
            iconName="share"
          />
          {profileDetails?.profile_image ? (
            <ProfileImage imageUrl={profileDetails.profile_image} className="profilePicIcon"/>
          ) : (
            <Icon className="profilePicIcon" iconName="default_pro_pic_icon" />
          )}
        </div>
        <div className="ratingStarIconContainer">
          <Ratings
            disabled
            value={profileDetails?.listenerRatings?.avgRating}
          />
        </div>
        <div className="ratingContainer">
          {profileDetails?.listenerRatings?.avgRating}/ 5
        </div>
      </header>
      <section className="bodyContainer">
        <div className="statisticsRow">
          <div className="statisticsCol">
            <div className="statisticsLabel">{content.PRICE}</div>
            <div className="statistic">{`$${profileDetails?.price}`}</div>
          </div>
          {/* <div className="buttonContainer">
            <Icon className="statusIcon" iconName="mute" />
            <Button
              className="statusButton"
              onClick={""}
              buttonText={content.STATUS[0]}
            />
          </div>
          <div className="statisticsCol">
            <div className="statisticsLabel">{content.RATINGS}</div>
            <div className="statistic">34</div>
          </div> */}
        </div>
        {/* <div className="mainButtonRow">
          <div
            className="mainButtonContainer"
            style={
              !isWaitlisted
                ? { background: `linear-gradient(64deg, #100F0F, #46515F)` }
                : {}
            }
          >
            <Icon
              className="mainButtonIcon"
              iconName={!isWaitlisted ? "target" : "target_purple"}
            />
            <Button
              className={!isWaitlisted ? "transparentButton" : "mainButton"}
              onClick={""}
              buttonText={
                !isWaitlisted ? content.ADD_TO_LIST : content.HITLISTED
              }
            />
          </div>
          <div
            className="mainButtonContainer"
            style={
              !isWaitlisted
                ? { background: `linear-gradient(64deg, #100F0F, #6B798C)` }
                : {}
            }
          >
            <Icon
              className="mainButtonIcon"
              iconName={!isWaitlisted ? "heart" : "heart_purple"}
            />
            <Button
              className={!isWaitlisted ? "transparentButton" : "mainButton"}
              onClick={""}
              buttonText={!isWaitlisted ? content.FOLLOW : content.FOLLOWING}
            />
          </div>
        </div> */}
        <div className="waitlistContainer">
          <div className="iconContainer">
            <Button
              className="connectButton"
              buttonText={content.CONNECT}
              onClick={handleConnectClick}
            />
          </div>
        </div>
        <div className="largeFormContainer">
          <SendMe headline={profileDetails?.headline} />
          <About bio={profileDetails?.bio} />
          <Favorites genres={profileDetails?.favourite_genres} />
          <Location city={profileDetails?.city} />
          <Roles tags={profileDetails?.listener_tags} />
          <ListenerRatings listenerRatings={profileDetails?.listenerRatings} />
        </div>
      </section>
      <section className="profileHearBKFooter">
        <HearBKIcon />
      </section>
    </div>
  );
};

export default Profile;
