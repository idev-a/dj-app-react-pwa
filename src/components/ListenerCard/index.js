import React from "react";
import IconComponent from "../../common/IconComponent";
import CheckBox from "rc-checkbox";
import "./styles.scss";

const ListenerCard = ({ listener, handleSelectListener, tagsArray, handleSelectedListeners }) => {
  console.log(handleSelectedListeners);
  return (
    <div className="listenerCardContainer">
      <>
        <div>
          {listener.profile_image ? (
            <img
              className="cardProfilePic"
              src={listener.profile_image}
              alt=""
            />
          ) : (
            <IconComponent
              className="cardProfilePic"
              iconName="default_pro_pic_icon"
            />
          )}
        </div>
        <div className="listenerDetails">
          <div className="displayName">{listener.display_name}</div>
          <div className="tagsContainer">
            {listener.listener_tags &&
              listener.listener_tags.map(listenerTag => {
                const tagObj = tagsArray.find(t => {
                  return t._id === listenerTag;
                });
                return tagObj ? (
                  <div className="tagLabel">{tagObj.tag}</div>
                ) : null;
              })}
          </div>
          <div className="headline">{listener.headline}</div>
        </div>
        <div className="priceDetails">
          <div className="price">£{parseInt(listener.price).toFixed(2)}</div>
          <div className="selectContainer">
            <CheckBox
              name="selectListener"
              onChange={e => handleSelectedListeners(listener, e)}
            />
            Select
          </div>
        </div>
      </>
    </div>
  );
};

export default ListenerCard;
