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

const ListenerPreferencesComponent = ({ city, dateOfBirth, favouriteGenres, price, sendMe, describeSelf, onInputChange }) => {
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
            document.querySelector('.detailsContainer').classList.remove('hidden');
            document.querySelector('.priceContainer').classList.remove('hidden');
            document.querySelector('.rateButton').classList.remove('hidden');
            document.querySelector('.feedbackButton').classList.remove('hidden');
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
                    <div onClick={(e) => handleClickGenderBoxes(e)} className="genderBoxSelectors selected">
                        {content.GENDER_MALE}
                    </div>
                    <div onClick={(e) => handleClickGenderBoxes(e)} className="genderBoxSelectors">
                        {content.GENDER_FEMALE}
                    </div>
                    <div onClick={(e) => handleClickGenderBoxes(e)} className="genderBoxSelectors">
                        {content.GENDER_NON_BINARY}
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
                <div className="containerLabel genresLabel">
                    {content.FAVOURITE_GENRES_LABEL}
                    <img className="addCircleIcon" src={addcircle} alt="" />
                </div>
                <InputField 
                    id="favouriteGenres"
                    onChange={onInputChange}
                    value={favouriteGenres}
                    placeholder={content.FAVOURITE_GENRES_SEARCH}
                    className="inputField"
                />
                <div className="containerLabel">
                    {content.TAGS_LABEL}
                </div>
                <div className="tagsContainer">
                    <div className="tags selected">
                        PRODUCER
                    </div>
                    <div className="tags">
                        SONGWRITER
                    </div>
                    <div className="tags">
                        ARTIST
                    </div>
                    <div className="tags">
                        DJ
                    </div>
                    <div className="tags">
                        JOURNALIST
                    </div>
                    <div className="tags">
                        PODCASTER
                    </div>
                    <div className="tags">
                        ENTHUSIAST
                    </div>
                    <div className="tags">
                        BLOGGER
                    </div>
                    <div className="tags">
                        EXECUTIVE
                    </div>
                    <div className="tags">
                        A&R
                    </div>
                    <div className="tags">
                        PUBLICIST
                    </div>
                    <div className="tags">
                        INFLUENCER
                    </div>
                    <div className="tags">
                        MANAGER
                    </div>
                    <div className="tags">
                        MARKETER
                    </div>
                </div>
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
                <br/>
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
    price: 5,
    sendMe: "",
    describeSelf: ""
};

export default ListenerPreferencesComponent;