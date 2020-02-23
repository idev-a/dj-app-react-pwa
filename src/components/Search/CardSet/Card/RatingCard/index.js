import React from "react";
import "./styles.scss";
import IconComponent from "../../../../../common/IconComponent";
const RatingCard = ({ listener }) => {
  return (
    <li className="userLis">
      {listener.profile_image ? (
        <img className="profilePic" src={listener.profile_image} alt="" />
      ) : (
        <IconComponent
          className="defaultProfilePicIcon"
          iconName="default_pro_pic_icon"
        />
      )}
      <p className="userTag">{listener.user_name}</p>
    </li>
  );
};

export default RatingCard;
