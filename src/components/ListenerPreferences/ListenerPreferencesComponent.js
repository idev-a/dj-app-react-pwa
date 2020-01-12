import React from 'react';
import cx from "classnames";
import content from "./content";
import Icon from "../../common/IconComponent";
import "./ListenerPreferences.styles.scss";
import DetailsForm from "./DetailsForm";
import PriceForm from "./PriceForm";
import Button from "../../common/Button";

const ListenerPreferencesComponent = ({ 
    handleClickRequestBoxes,
    handleClickToggleAddList,
    handleClickAddGenres,
    handleClickAddTags,
    hitRequestBox,
    proRequestBox,
    genresList,
    tagsList,
    genresAdded,
    tagsAdded
}) => {

    let hitRequestBoxSelected = hitRequestBox ? "selected" : "";
    let proRequestBoxSelected = proRequestBox ? "selected" : "";
    let hitCheckIcons = hitRequestBox ? "checkcirclegreen" : "checkcircle";
    let proCheckIcons = proRequestBox ? "checkcircleblue" : "checkcircle";
    let containerContents;
    let style;
    if (hitRequestBox || proRequestBox) {
        style = {
            height: "initial"
        };
        containerContents = 
        <React.Fragment>
            <DetailsForm 
                handleClickToggleAddList={handleClickToggleAddList}
                handleClickAddGenres={handleClickAddGenres}
                handleClickAddTags={handleClickAddTags}
                genresList={genresList}
                tagsList={tagsList}
                genresAdded={genresAdded}
                tagsAdded={tagsAdded}
            />
            <div className="buttonWrapper">
                <Button className="launchButton" buttonText={content.RATE_TRACKS_TEXT} ></Button>
                <Button className="launchButton" buttonText={content.ORDER_FEEDBACK_TEXT} ></Button>
            </div>
        </React.Fragment>
    }
    if (hitRequestBox && proRequestBox) {
        style = {
            height: "initial"
        };
        containerContents =
        <React.Fragment>
            <DetailsForm 
                handleClickToggleAddList={handleClickToggleAddList}
                handleClickAddGenres={handleClickAddGenres}
                handleClickAddTags={handleClickAddTags}
                genresList={genresList}
                tagsList={tagsList}
                genresAdded={genresAdded}
                tagsAdded={tagsAdded}
            />
            <PriceForm />
            <div className="buttonWrapper">
                <Button
                className="launchButton"
                buttonText={content.RATE_TRACKS_TEXT}
                onClick={""}
                disabled={""}
                />
                <Button
                className="launchButton"
                buttonText={content.ORDER_FEEDBACK_TEXT}
                onClick={""}
                disabled={""}
                />
            </div>
        </React.Fragment>
    }
    if (!hitRequestBox && !proRequestBox) {
        style = {
            height: "812px"
        };
        containerContents = "";
    }

    return (
        <div className="listenerPreferencesContainer" style={style}>
            <header className="listenerPreferencesHeader">
                <Icon iconName="MenuIcon" className="menuIcon" />
            </header>
            <section className="listenerPreferencesHeaderText">
                <div>
                    <strong>{content.HEADER_A}</strong>
                </div>
                <div>{content.HEADER_B}</div>
            </section>
            <div className="listenerPreferencesDescription">
                {content.DESCRIPTION_A}
                <br/>
                {content.DESCRIPTION_B}
            </div>
            <div className="requestBoxesContainer">
                <div onClick={(e) => handleClickRequestBoxes(e)} className={cx("requestBox", hitRequestBoxSelected)} id="hitRequestBox">
                    <div className="requestBoxContents">
                        <label>
                            {content.HIT_REQUESTS_TITLE}
                        </label>
                        <ul>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={hitCheckIcons} />
                                </div>
                                {content.HIT_REQUESTS_LIS_A}
                            </li>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={hitCheckIcons} />
                                </div>
                                {content.HIT_REQUESTS_LIS_B}
                            </li>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={hitCheckIcons} />
                                </div>
                                {content.HIT_REQUESTS_LIS_C}
                            </li>
                        </ul>
                    </div>
                </div>
                <div onClick={(e) => handleClickRequestBoxes(e)} className={cx("requestBox", proRequestBoxSelected)} id="proRequestBox">
                    <div className="requestBoxContents">
                        <label>
                            {content.PRO_REQUESTS_TITLE}
                        </label>
                        <ul>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={proCheckIcons} />
                                </div>
                                {content.PRO_REQUESTS_LIS_A}
                            </li>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={proCheckIcons} />
                                </div>
                                {content.PRO_REQUESTS_LIS_B}
                            </li>
                            <li>
                                <div className="checkIconContainer">
                                    <Icon className={cx("checkIcon")} iconName={proCheckIcons} />
                                </div>
                                {content.PRO_REQUESTS_LIS_C}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {containerContents}
        </div>
    );
};

export default ListenerPreferencesComponent;