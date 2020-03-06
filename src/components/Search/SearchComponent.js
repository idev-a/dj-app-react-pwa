import React from "react";
import isEmpty from "lodash/isEmpty";
import content from "./content";
import "./styles.scss";
import Icon from "../../common/IconComponent";
import InputField from "../../common/InputField";
import CardSet from "./CardSet";
import RatingCard from "./CardSet/Card/RatingCard";

const SearchComponent = ({
  searchValue,
  onInputChange,
  data,
  searchResults
}) => {
  return (
    <div className="searchComponentContainer">
      <header className="searchComponentHeader">
        <Icon className="menuIcon" iconName="menu" />
        <div className="searchInputContainer">
          <InputField
            id="searchInput"
            className="searchInput"
            value={searchValue}
            onChange={onInputChange}
            placeholder={content.SEARCH_PLACEHOLDER}
          />
        </div>
        <Icon className="searchHeaderIcon" iconName="search_header" />
      </header>
      {!searchValue.length > 0 && (
        <section className="bodyContainer">
          {!isEmpty(data) && <CardSet data={data} />}
        </section>
      )}
      {searchValue.length > 0 && (
        <section className="bodyContainer verticalScroll">
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <ul className="listeningNowBody">
              {searchResults.map(listener => (
                <RatingCard listener={listener} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

SearchComponent.defaultProps = {
  searchValue: ""
};

export default SearchComponent;
