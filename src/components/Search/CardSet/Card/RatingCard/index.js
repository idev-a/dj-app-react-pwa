import React from "react";
import "./styles.scss";
import IconComponent from "../../../../../common/IconComponent";
import { useHistory } from "react-router-dom";
import ProfileImage from "../../../../ProfileImage";
const RatingCard = ({ listener }) => {
  const history = useHistory();
  return (
    <li
      className="userLis"
      role="button"
      onClick={() => history.push(`/p/${listener.user_name}`)}
    >
      {listener.profile_image ? (
        <ProfileImage
          className="profilePic"
          imageUrl={listener.profile_image}
        />
      ) : (
        <IconComponent className="profilePic" iconName="default_pro_pic_icon" />
      )}
      <p className="userTag">{listener.display_name}</p>
    </li>
  );
};

export default RatingCard;
