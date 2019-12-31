import React from 'react';
import cx from "classnames";
import content from "./content";
import Icon from "../../common/IconComponent";
import "./ListenerPreferences.styles.scss";
import Menu from "../../containers/Menu";
import DetailsContainerComponent from "./components/DetailsContainerComponent";
import PriceContainerComponent from "./components/PriceContainerComponent";
import Button from "../../common/Button";

const ListenerPreferencesComponent = ({ 
    handleClickRequestBoxes,
    handleClickToggleAddList,
    handleClickAddGenres,
    handleClickAddTags,
    handleClickMenuToggle,
    hitRequestBox,
    proRequestBox,
    genresList,
    tagsList,
    genresAdded,
    tagsAdded,
    toggle,
    covered
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
            <div>
                <DetailsContainerComponent 
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
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.ORDER_FEEDBACK_TEXT} ></Button>
                </div>
            </div>
        </React.Fragment>
    }
    if (hitRequestBox && proRequestBox) {
        style = {
            height: "initial"
        };
        containerContents =
        <React.Fragment>
            <div>
                <DetailsContainerComponent 
                    handleClickToggleAddList={handleClickToggleAddList}
                    handleClickAddGenres={handleClickAddGenres}
                    handleClickAddTags={handleClickAddTags}
                    genresList={genresList}
                    tagsList={tagsList}
                    genresAdded={genresAdded}
                    tagsAdded={tagsAdded}
                />
                <PriceContainerComponent />
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.RATE_TRACKS_TEXT} ></Button>
                </div>
                <div className="buttonWrapper">
                    <Button className="launchButton" buttonText={content.ORDER_FEEDBACK_TEXT} ></Button>
                </div>
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
        <div className="listenerPreferencesBigContainer">
            <Menu 
                handleClickMenuToggle={handleClickMenuToggle} 
                toggle={toggle}
            />
            <div className={`listenerPreferencesContainer ${covered}`} style={style}>
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
                    <div onClick={(e) => handleClickRequestBoxes(e)} className={cx("requestBox", hitRequestBoxSelected)} id="hitRequestBox">
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
                    <div onClick={(e) => handleClickRequestBoxes(e)} className={cx("requestBox", proRequestBoxSelected)} id="proRequestBox">
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
                {containerContents}
            </div>
        </div>
    );
};

export default ListenerPreferencesComponent;