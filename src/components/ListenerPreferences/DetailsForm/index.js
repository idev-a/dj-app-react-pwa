import React from "react";
import cx from "classnames";
import content from "./content";
import "./styles.scss";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

const DetailsComponent = ({
  handleClickToggleAddList,
  handleClickAddGenres,
  handleClickAddTags,
  genresList,
  tagsList,
  genresAdded,
  tagsAdded,
  city,
  dob,
  gender,
  genres,
  tags,
  onInputChange,
  handleGenderChange,
}) => {
  const genderBoxArray = content.GENDER.map((g, i) => {
    return (
      <div className="genderBoxButtonWrapper">
        <Button
          buttonText={g}
          id="gender"
          className={cx("genderBoxSelectors", g === gender && "selected")}
          onClick={() => handleGenderChange(g)}
        />
      </div>
    );
  });
  const addGenresArray = genres.map((genre) => {
    return (
      <div className="addGenresButtonWrapper">
        <Button
          buttonText={genre.name.toUpperCase()}
          className={cx("addGenresLis")}
          onClick={(e) => handleClickAddGenres(e, genre)}
        />
      </div>
    );
  });
  const addGenresSelectedArray = genresAdded.map((genre) => {
    return (
      <div className="addGenresSelectedButtonWrapper">
        <Button
          buttonText={genre.name.toUpperCase()}
          className={cx("addGenresSelectedLis")}
          onClick={(e) => handleClickAddGenres(e, genre)}
        />
      </div>
    );
  });
  const addTagsArray = tags.map((tag) => {
    return (
      <div className="addTagsButtonWrapper">
        <Button
          buttonText={tag.tag.toUpperCase()}
          className={cx("addTagsLis")}
          onClick={(e) => handleClickAddTags(e, tag)}
        />
      </div>
    );
  });
  const addTagsSelectedArray = tagsAdded.map((tag) => {
    return (
      <div className="addTagsSelectedWrapper">
        <Button
          buttonText={tag.tag.toUpperCase()}
          className={cx("addTagsSelectedLis")}
          onClick={(e) => handleClickAddTags(e, tag)}
        />
      </div>
    );
  });

  let addGenresList = genresList ? (
    <ul className="addGenresList">{addGenresArray}</ul>
  ) : (
    ""
  );
  let addTagsList = tagsList ? (
    <ul className="addTagsList">{addTagsArray}</ul>
  ) : (
    ""
  );

  return (
    <div className="formInputContainer">
      <label for="cityName" className="formInputLabel">
        {content.CITY_LABEL}
      </label>
      <InputField
        id="city"
        className="formInputField"
        value={city}
        onChange={onInputChange}
        placeholder={content.CHOOSE_CITY}
      />
      <div className="formInputLabel">{content.GENDER_LABEL}</div>
      <div className="form genderBoxRow">{genderBoxArray}</div>
      <label for="dateOfBirth" className="formInputLabel">
        {content.DOB_LABEL}
      </label>
      <InputField
        id="dob"
        className="formInputField"
        value={dob}
        onChange={onInputChange}
        placeholder={content.DOB}
      />
      <label for="genresInputs" className="formInputLabel">
        {content.FAVOURITE_GENRES_LABEL}
      </label>
      <div className="addCircleIconContainer">
        <div
          onClick={(e) => handleClickToggleAddList(e, "genres")}
          className="formIconContainer"
        >
          <Icon className="addCircleIcon" iconName="AddCircle" />
        </div>
        {addGenresList}
        </div>
        <InputField
          id="genres"
          className="formInputField"
          value={genres}
          onChange={onInputChange}
          placeholder={content.FAVOURITE_GENRES_SEARCH}
        />
        <ul className="selectedGenresContainer">{addGenresSelectedArray}</ul>
        <label for="tagsInputs" className="formInputLabel">
          {content.TAGS_LABEL}
        </label>
        <div className="addCircleIconContainer">
          <div
            onClick={(e) => handleClickToggleAddList(e, "tags")}
            className="formIconContainer"
          >
            <Icon className="addCircleIcon" iconName="AddCircle" />
          </div>
          {addTagsList}
        </div>
        <InputField
          id="tags"
          className="formInputField"
          value={tags}
          onChange={onInputChange}
          placeholder={content.TAGS_SEARCH}
        />
        <ul className="selectedTagsContainer">{addTagsSelectedArray}</ul>
    </div>
  );
};

DetailsComponent.defaultProps = {
  city: "",
  dateOfBirth: "",
  favouriteGenres: "",
  tags: "",
};

export default DetailsComponent;
