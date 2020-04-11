import React from "react";
import IconComponent from "../../common/IconComponent";
import CheckBox from "rc-checkbox";
import "./styles.scss";
import ProfileImage from "../ProfileImage";

const ListenerCard = ({
  listener,
  handleSelectListener,
  tagsArray,
  handleSelectedListeners,
}) => {
  const getListernerTags = () => {
    const listenerTags = [...listener.listener_tags];
    if (listenerTags && listenerTags.length > 2) {
      listenerTags.splice(0, listener.listener_tags.length - 2);
      listenerTags.push("showMoreTags");
    }
    return (
      listenerTags &&
      listenerTags.map((listenerTag) => {
        if (listenerTag === "showMoreTags") {
          return (
            <div className="tagLabel">{`+${listener.listener_tags.length}`}</div>
          );
        }
        const tagObj = tagsArray.find((t) => {
          return t._id === listenerTag;
        });
        return tagObj ? <div className="tagLabel">{tagObj.tag}</div> : null;
      })
    );
  };

  return (
    <div className="listenerCardContainer">
      <>
        <div>
          {listener.profile_image ? (
            <ProfileImage
              className="cardProfilePic"
              imageUrl={listener.profile_image}
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
          <div className="tagsContainer">{getListernerTags()}</div>
          <div className="headline">{listener.headline}</div>
        </div>
        <div className="priceDetails">
          <div className="price">${parseInt(listener.price).toFixed(2)}</div>
          <div className="selectContainer">
            <CheckBox
              name="selectListener"
              onChange={(e) => handleSelectedListeners(listener, e)}
            />
            <span style={{ marginLeft: "10px" }}>Select</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default ListenerCard;
