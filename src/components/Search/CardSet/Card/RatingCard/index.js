import React from "react";
import "./styles.scss";
import IconComponent from "../../../../../common/IconComponent";
import { useHistory } from "react-router-dom";
const RatingCard = ({ listener }) => {
  const history = useHistory();
  return (
    <li
      className="userLis"
      role="button"
      onClick={() => history.push(`/p/${listener.user_name}`)}
    >
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
