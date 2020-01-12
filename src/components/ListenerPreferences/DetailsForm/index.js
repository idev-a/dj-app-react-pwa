import React from 'react';
import cx from "classnames";
import content from "../content";
import "./styles.scss";
import Icon from "../../../common/IconComponent";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";

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
        <section className="formContainer">
            <header className="formHeaderContainer">
                <div className="formHeaderText">
                    {content.DETAILS_TITLE}
                </div>
            </header>
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
                <div className="formInputLabel">
                    {content.GENDER_LABEL}
                </div>
                <div className="form genderBoxRow">
                    {genderBoxArray}
                </div>
                <label for="dateOfBirth" className="formInputLabel">
                    {content.DOB_LABEL}
                </label>
                <InputField
                    id="dateOfBirth"
                    className="formInputField"
                    value={dateOfBirth}
                    onChange={onInputChange}
                    placeholder={content.DOB}
                />
                <label for="genresInputs" className="formInputLabel">
                    {content.FAVOURITE_GENRES_LABEL}
                </label>
                <div className="addCircleIconContainer">
                    <div onClick={(e) => handleClickToggleAddList(e, "genres")} className="formIconContainer">
                        <Icon className="addCircleIcon" iconName="AddCircle" />
                    </div>
                    {addGenresList}
                </div>
                <InputField 
                    id="genres"
                    className="formInputField"
                    value={favouriteGenres}
                    onChange={onInputChange}
                    placeholder={content.FAVOURITE_GENRES_SEARCH}
                    />
                <ul className="selectedGenresContainer">
                    {addGenresSelectedArray}
                </ul>
                <label for="tagsInputs" className="formInputLabel">
                    {content.TAGS_LABEL}
                </label>
                <div className="addCircleIconContainer">
                    <div onClick={(e) => handleClickToggleAddList(e, "tags")} className="formIconContainer">
                        <Icon className="addCircleIcon" iconName="AddCircle" />
                    </div>
                    {addTagsList}
                </div>
                <InputField 
                    id="tags"
                    className="formInputField"
                    value={favouriteGenres}
                    onChange={onInputChange}
                    placeholder={content.FAVOURITE_GENRES_SEARCH}
                />
                <ul className="selectedTagsContainer">
                    {addTagsSelectedArray}
                </ul>
            </div>
        </section>
    );
  };

DetailsContainerComponent.defaultProps = {
    city: "",
    dateOfBirth: "",
    favouriteGenres: "",
    tags: ""
}
  
  export default DetailsContainerComponent;