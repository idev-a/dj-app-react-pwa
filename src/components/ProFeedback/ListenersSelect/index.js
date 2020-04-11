import React, { useEffect } from "react";
import "./styles.scss";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import content from "./content";
import ListenerCard from "../../ListenerCard";
import Button from "../../../common/Button";

const ListenersSelect = ({
  searchValue,
  handleSearchValueChange,
  searchListeners,
  tagsArray,
  handleListenerSelect,
  handleSelectedListener
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="listenerSelectContainer">
      <div className="searchComponentHeader">
        <Icon className="menuIcon" iconName="menu" />
        <div className="searchInputContainer">
          <InputField
            id="searchInput"
            className="searchInput"
            value={searchValue}
            onChange={handleSearchValueChange}
            placeholder={content.SEARCH_PLACEHOLDER}
          />
        </div>
        <Icon className="searchHeaderIcon" iconName="search_header" />
      </div>
      <div>
        {searchListeners.map(listener => (
          <ListenerCard
            listener={listener}
            tagsArray={tagsArray}
            handleSelectListener={handleListenerSelect}
            handleSelectedListeners={handleSelectedListener}
          />
        ))}
      </div>
      <div className="buttonWrapper">
        <Button className="doneButton" buttonText="Done" onClick={handleListenerSelect}></Button>
      </div>
    </div>
  );
};

export default ListenersSelect;
