import React from 'react';
import content from "./content";
import "./ListenerPreferences.styles.scss";
import Button from "../../common/Button";
import menu from "../../assets/img/listenerpreferences/menu.svg";
import check from "../../assets/img/listenerpreferences/check_circle-24px.svg";
import greencheck from "../../assets/img/listenerpreferences/check_circle-24px_green.svg";
import bluecheck from "../../assets/img/listenerpreferences/check_circle-24px_blue.svg";
import addcircle from "../../assets/img/listenerpreferences/add_circle-24px.svg";
import InputField from "../../common/InputField";
import TextAreaField from "../../common/TextAreaField";

const ListenerPreferencesComponent = ({ city, dateOfBirth, favouriteGenres, tags, price, sendMe, describeSelf, onInputChange }) => {
    const handleClickRequestBoxes = (e) => {
        const el = e.target;
        el.classList.toggle('clicked');
        if (el.id === "hitRequestBox") {
            document.querySelectorAll(".hitCheckIcons").forEach(icon => icon.classList.toggle("hidden"));
        } else if (el.id === "proRequestBox") {
            document.querySelectorAll(".proCheckIcons").forEach(icon => icon.classList.toggle("hidden"));
        }
        if (document.getElementById('hitRequestBox').classList.contains('clicked') || document.getElementById('proRequestBox').classList.contains('clicked')) {
            document.querySelector('.listenerPreferencesContainer').style.height = 'initial';
            document.querySelector('.rateButton').classList.remove('hidden');
            document.querySelector('.feedbackButton').classList.remove('hidden');
            if (document.getElementById('hitRequestBox').classList.contains('clicked') && document.getElementById('proRequestBox').classList.contains('clicked')) {
                document.querySelector('.detailsContainer').classList.remove('hidden');
                document.querySelector('.priceContainer').classList.remove('hidden');
            } else {
                document.querySelector('.detailsContainer').classList.remove('hidden');
                if (!document.querySelector('.priceContainer').classList.contains('hidden')) {
                    document.querySelector('.priceContainer').classList.add('hidden');
                }
            }
        } else {
            document.querySelector('.listenerPreferencesContainer').style.height = '812px';
            if (!document.querySelector('.detailsContainer').classList.contains('hidden')) {
                document.querySelector('.detailsContainer').classList.add('hidden');
            }
            if (!document.querySelector('.priceContainer').classList.contains('hidden')) {
                document.querySelector('.priceContainer').classList.add('hidden');
            }
            if (!document.querySelector('.rateButton').classList.contains('hidden')) {
                document.querySelector('.rateButton').classList.add('hidden');
            }
            if (!document.querySelector('.feedbackButton').classList.contains('hidden')) {
                document.querySelector('.feedbackButton').classList.add('hidden');
            }
        }
    }
    const handleClickGenderBoxes = (e) => {
        const el = e.target;
        document.querySelectorAll('.genderBoxSelectors').forEach(box => box.classList.remove('selected'));
        el.classList.add('selected');
    }
    const handleClickToggleAddList = (e, type) => {
        const el = e.target;
        if (type === "genres") {
            if (!document.querySelector('.addTagsList').classList.add('hidden')) {
                document.querySelector('.addTagsList').classList.add('hidden');
            }
            const offsetY = el.getBoundingClientRect().top;
            const halfWindowY = window.innerHeight/2;
            document.querySelector('.addGenresList').classList.toggle('hidden');
            if (offsetY < halfWindowY) {
                document.querySelector('.addGenresList').style.top = "30px";
                document.querySelector('.addGenresList').style.bottom = "initial";
            } else {
                document.querySelector('.addGenresList').style.top = "initial";
                document.querySelector('.addGenresList').style.bottom = "-20px";
            }
        } else {
            if (!document.querySelector('.addGenresList').classList.add('hidden')) {
                document.querySelector('.addGenresList').classList.add('hidden');
            }
            const offsetY = el.getBoundingClientRect().top;
            const halfWindowY = window.innerHeight/2;
            document.querySelector('.addTagsList').classList.toggle('hidden');
            if (offsetY < halfWindowY) {
                document.querySelector('.addTagsList').style.top = "30px";
                document.querySelector('.addTagsList').style.bottom = "initial";
            } else {
                document.querySelector('.addTagsList').style.top = "initial";
                document.querySelector('.addTagsList').style.bottom = "-20px";
            }
        }
    }
    const handleClickAddGenres = (e) => {
        const el = e.target;
        document.querySelectorAll('.addGenresSelectedLis').forEach((li) => {
            if (el.innerHTML === li.innerHTML) {
                li.classList.toggle('hidden');
            }
        });
    }
    const handleClickAddTags = (e) => {
        const el = e.target;
        document.querySelectorAll('.addTagsSelectedLis').forEach((li) => {
            if (el.innerHTML === li.innerHTML) {
                li.classList.toggle('hidden');
            }
        });
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
            <li onClick={(e) => handleClickAddGenres(e)} className="addGenresLis">
                {genre}
            </li>
        )
    });
    const addGenresSelectedArray = content.FAVOURITE_GENRES.map((genre) => {
        return (
            <li onClick={(e) => handleClickAddGenres(e)} className="addGenresSelectedLis hidden">
                {genre}
            </li>
        )
    });
    const addTagsArray = content.TAGS.map((tag) => {
        return (
            <li onClick={(e) => handleClickAddTags(e)} className="addTagsLis">
                {tag}
            </li>
        )
    });
    const addTagsSelectedArray = content.TAGS.map((tag) => {
        return (
            <li onClick={(e) => handleClickAddTags(e)} className="addTagsSelectedLis hidden">
                {tag}
            </li>
        )
    });

    return (
        <div className="listenerPreferencesContainer">
            <div className="menuIconContainer">
                <img src={menu} alt="" />
            </div>
            <div className="listenerPreferencesHeaderA">
                {content.HEADER_A}
            </div>
            <div className="listenerPreferencesHeaderB">
                {content.HEADER_B}
            </div>
            <div className="listenerPreferencesDescription">
                {content.DESCRIPTION_A}
                <br/>
                {content.DESCRIPTION_B}
            </div>
            <div className="requestBoxesContainer">
                <div onClick={(e) => handleClickRequestBoxes(e)} className="requestBox" id="hitRequestBox">
                    <label>
                        {content.HIT_REQUESTS_TITLE}
                    </label>
                    <ul>
                        <li>
                            <div className="checkIconContainer">
                                <img className="hitCheckIcons" src={check} alt="" />
                                <img className="hitCheckIcons hidden" src={greencheck} alt="" />
                            </div>
                            {content.HIT_REQUESTS_LIS_A}
                        </li>
                        <li>
                            <div className="checkIconContainer">
                                <img className="hitCheckIcons" src={check} alt="" />
                                <img className="hitCheckIcons hidden" src={greencheck} alt="" />
                            </div>
                            {content.HIT_REQUESTS_LIS_B}
                        </li>
                        <li>
                            <div className="checkIconContainer">
                                <img className="hitCheckIcons" src={check} alt="" />
                                <img className="hitCheckIcons hidden" src={greencheck} alt="" />
                            </div>
                            {content.HIT_REQUESTS_LIS_C}
                        </li>
                    </ul>
                </div>
                <div onClick={(e) => handleClickRequestBoxes(e)} className="requestBox" id="proRequestBox">
                    <label>
                        {content.PRO_REQUESTS_TITLE}
                    </label>
                    <ul>
                        <li>
                            <div className="checkIconContainer">
                                <img className="proCheckIcons" src={check} alt="" />
                                <img className="proCheckIcons hidden" src={bluecheck} alt="" />
                            </div>
                            {content.PRO_REQUESTS_LIS_A}
                        </li>
                        <li>
                            <div className="checkIconContainer">
                                <img className="proCheckIcons" src={check} alt="" />
                                <img className="proCheckIcons hidden" src={bluecheck} alt="" />
                            </div>
                            {content.PRO_REQUESTS_LIS_B}
                        </li>
                        <li>
                            <div className="checkIconContainer">
                                <img className="proCheckIcons" src={check} alt="" />
                                <img className="proCheckIcons hidden" src={bluecheck} alt="" />
                            </div>
                            {content.PRO_REQUESTS_LIS_C}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="detailsContainer hidden">
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
                <div className="containerLabel genresLabel">
                    {content.FAVOURITE_GENRES_LABEL}
                </div>
                <div className="addCircleIconContainer">
                    <img className="addCircleIcon" src={addcircle} alt="" />
                    <ul className="addGenresList hidden">
                        {addGenresArray}
                    </ul>
                </div>
                <div onClick={(e) => handleClickToggleAddList(e, "genres")} className="inputFieldContainer">
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
                    <img className="addCircleIcon" src={addcircle} alt="" />
                    <ul className="addTagsList hidden">
                        {addTagsArray}
                    </ul>
                </div>
                <div onClick={(e) => handleClickToggleAddList(e, "tags")} className="inputFieldContainer">
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
            <div className="priceContainer hidden">
                <div className="detailsHeader priceTitle">
                    {content.PRICE_LABEL}
                </div>
                <div className="priceDescription">
                    {content.PRICE_DESCRIPTION}
                </div>
                <div className="containerLabel priceLabel">
                    {content.PRICE_LABEL}
                    <div className="priceSign">
                        $
                    </div>
                </div>
                <InputField 
                    id="price"
                    onChange={onInputChange}
                    value={price}
                    placeholder={content.PRICE_PLACEHOLDER}
                    className="inputField"
                    hasIcon                
                />
                <div className="containerLabel">
                    {content.SEND_ME_LABEL}
                </div>
                <div className="sendMeDescriptionA">
                    {content.SEND_ME_DESCRIPTION_A}
                </div>
                <div className="sendMeDescriptionBContainer">
                    <span className="sendMeDescriptionBIntro">
                        e.g.
                    </span>
                    &nbsp;
                    <span className="sendMeDescriptionBMain">
                        {content.SEND_ME_DESCRIPTION_B}
                    </span>
                </div>
                <div className="sendMeTitleContainer">
                    <span className="sendMeTitleA">
                        {content.SEND_ME_TITLE_A}
                    </span>
                    &nbsp;&nbsp;
                    <span className="sendMeTitleB">
                        {content.SEND_ME_TITLE_B}
                    </span>
                </div>
                <TextAreaField 
                    id="sendMe"
                    onChange={onInputChange}
                    value={sendMe}
                    className="inputField"         
                />
                <div className="containerLabel bioLabel">
                    {content.BIO_LABEL}
                </div>
                <div className="describeYourselfTitle">
                    {content.DESCRIBE_YOURSELF_TITLE}
                </div>
                <TextAreaField 
                    id="describeSelf"
                    onChange={onInputChange}
                    value={describeSelf}
                    className="inputField"                
                />
            </div>
            <div className="buttonWrapper">
                <Button className="rateButton hidden" buttonText={content.RATE_TRACKS_TEXT} ></Button>
            </div>
            <div className="buttonWrapper">
                <Button className="feedbackButton hidden" buttonText={content.ORDER_FEEDBACK_TEXT} ></Button>
            </div>
        </div>
    );
};

ListenerPreferencesComponent.defaultProps = {
    city: "",
    dateOfBirth: "",
    favouriteGenres: "",
    tags: "",
    price: 5,
    sendMe: "",
    describeSelf: ""
};

export default ListenerPreferencesComponent;