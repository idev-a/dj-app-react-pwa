import React from 'react';
import cx from "classnames";
import content from "../content";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";

const DetailsContainerComponent = ({
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
    }

    const genderBoxArray = content.GENDER.map((gender, i) => {
        if (i === 0) {
            return (
                <div onClick={(e) => handleClickGenderBoxes(e)} className="genderBoxSelectors selected">
                    {gender}
                </div>
            )
        } else {
            return (
                <div onClick={(e) => handleClickGenderBoxes(e)} className="genderBoxSelectors">
                    {gender}
                </div>
            )
        }
    })
    const addGenresArray = content.FAVOURITE_GENRES.map((genre) => {
        return (
            <li onClick={(e) => handleClickAddGenres(e, genre)} className="addGenresLis">
                {genre}
            </li>
        )
    });
    const addGenresSelectedArray = genresAdded.map((genre) => {
        return (
            <li onClick={(e) => handleClickAddGenres(e, genre)} className="addGenresSelectedLis">
                {genre}
            </li>
        )
    });
    const addTagsArray = content.TAGS.map((tag) => {
        return (
            <li onClick={(e) => handleClickAddTags(e, tag)} className="addTagsLis">
                {tag}
            </li>
        )
    });
    const addTagsSelectedArray = tagsAdded.map((tag) => {
        return (
            <li onClick={(e) => handleClickAddTags(e, tag)} className="addTagsSelectedLis">
                {tag}
            </li>
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
        <div className="detailsContainer">
            <div className="detailsHeader">
                {content.DETAILS_TITLE}
            </div>
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
            <div className="containerLabel">
                {content.GENDER_LABEL}
            </div>
            <div className="genderBoxRow">
                {genderBoxArray}
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
        </div>
    );
  };

DetailsContainerComponent.defaultProps = {
    city: "",
    dateOfBirth: "",
    favouriteGenres: "",
    tags: ""
}
  
  export default DetailsContainerComponent;