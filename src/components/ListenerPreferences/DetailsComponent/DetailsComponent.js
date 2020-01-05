import React from 'react';
import cx from "classnames";
import content from "./content";
import "./DetailsComponent.styles.scss";
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
    dateOfBirth, 
    favouriteGenres, 
    tags, 
    onInputChange
}) => {

    const handleClickGenderBoxes = (e) => {
        const el = e.target;
        document.querySelectorAll('.genderBoxSelectors').forEach(box => box.classList.remove('selected'));
        el.classList.add('selected');
    };

    const genderBoxArray = content.GENDER.map((gender, i) => {
        return (
            <div className="genderBoxButtonWrapper">
                <Button 
                    buttonText={gender}
                    className={cx(
                        "genderBoxSelectors",
                        i === 0 && "selected"
                    )}
                    onClick={(e) => handleClickGenderBoxes(e)}
                />
            </div>
        )
    });
    const addGenresArray = content.FAVOURITE_GENRES.map((genre) => {
        return (
            <div className="addGenresButtonWrapper">
                <Button 
                    buttonText={genre}
                    className={cx(
                        "addGenresLis"
                    )}
                    onClick={(e) => handleClickAddGenres(e, genre)}
                />
            </div>
        )
    });
    const addGenresSelectedArray = genresAdded.map((genre) => {
        return (
            <div className="addGenresSelectedButtonWrapper">
                <Button 
                    buttonText={genre.toUpperCase()}
                    className={cx(
                        "addGenresSelectedLis"
                    )}
                    onClick={(e) => handleClickAddGenres(e, genre)}
                />
            </div>
        )
    });
    const addTagsArray = content.TAGS.map((tag) => {
        return (
            <div className="addTagsButtonWrapper">
                <Button 
                    buttonText={tag}
                    className={cx(
                        "addTagsLis"
                    )}
                    onClick={(e) => handleClickAddTags(e, tag)}
                />
            </div>
        )
    });
    const addTagsSelectedArray = tagsAdded.map((tag) => {
        return (
            <div className="addTagsSelectedWrapper">
                <Button 
                    buttonText={tag.toUpperCase()}
                    className={cx(
                        "addTagsSelectedLis"
                    )}
                    onClick={(e) => handleClickAddGenres(e)}
                />
            </div>
        )
    });

    let addGenresList = genresList ? 
        <ul className="addGenresList">
            {addGenresArray}
        </ul> : "";
    let addTagsList = tagsList ?
        <ul className="addTagsList">
            {addTagsArray}
        </ul> : "";


    return (
        <React.Fragment>
            <div className="containerLabel">
                {content.CITY_LABEL}
            </div>
            <InputField 
                id="city"
                onChange={onInputChange}
                value={city}
                placeholder={content.CHOOSE_CITY}
                className="inputField"
            />
            <div className="genderBoxContainer">
                <div className="containerLabel">
                    {content.GENDER_LABEL}
                </div>
                <div className="genderBoxRow">
                    {genderBoxArray}
                </div>
            </div>
            <div className="containerLabel">
                {content.DOB_LABEL}
            </div>
            <InputField
                id="dateOfBirth"
                onChange={onInputChange}
                value={dateOfBirth}
                placeholder={content.DOB}
                className="inputField"
            />
            <div className="containerLabel">
                {content.FAVOURITE_GENRES_LABEL}
            </div>
            <div className="addCircleIconContainer">
                <Icon className={cx("addCircleIcon")} iconName={"addcircle"} />
                {addGenresList}
            </div>
            <div onClick={(e) => handleClickToggleAddList(e, "genres")} className="inputFieldContainer" id="genresContainer">
                <InputField 
                    id="favouriteGenres"
                    onChange={onInputChange}
                    value={favouriteGenres}
                    placeholder={content.FAVOURITE_GENRES_SEARCH}
                    className="inputField"
                />
            </div>
            <ul className="selectedGenresContainer">
                {addGenresSelectedArray}
            </ul>
            <div className="containerLabel">
                {content.TAGS_LABEL}
            </div>
            <div className="addCircleIconContainer">
                <Icon className={cx("addCircleIcon")} iconName={"addcircle"} />
                {addTagsList}
            </div>
            <div onClick={(e) => handleClickToggleAddList(e, "tags")} className="inputFieldContainer" id="tagsContainer">
                <InputField 
                    id="tags"
                    onChange={onInputChange}
                    value={tags}
                    placeholder={content.TAGS_SEARCH}
                    className="inputField"
                />
            </div>
            <ul className="selectedTagsContainer">
                {addTagsSelectedArray}
            </ul>
        </React.Fragment>
    );
  };

DetailsComponent.defaultProps = {
    city: "",
    dateOfBirth: "",
    favouriteGenres: "",
    tags: ""
}
  
  export default DetailsComponent;