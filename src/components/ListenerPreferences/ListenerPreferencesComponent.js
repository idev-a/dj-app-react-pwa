import React from "react";
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
  onInputChange,
  hitRequestBox,
  proRequestBox,
  genresList,
  tagsList,
  genres,
  tags,
  city,
  gender,
  dob,
  bio,
  price,
  sendMeText,
  genresAdded,
  tagsAdded,
  handleButtonClick,
  handleGenderChange,
}) => {
  let hitRequestBoxSelected = hitRequestBox ? "selected" : "";
  let proRequestBoxSelected = proRequestBox ? "selected" : "";
  let hitCheckIcons = hitRequestBox ? "checkcirclegreen" : "checkcircle";
  let proCheckIcons = proRequestBox ? "checkcircleblue" : "checkcircle";
  let containerContents;
  let style;
  if (hitRequestBox || proRequestBox) {
    style = {
      height: "initial",
    };
    containerContents = (
      <React.Fragment>
        <section className="formContainer">
          <header className="formHeaderContainer">
            <div className="formHeaderText">
                {content.DETAILS_TITLE}
            </div>
          </header>
          <DetailsForm
            city={city}
            gender={gender}
            dob={dob}
            handleClickToggleAddList={handleClickToggleAddList}
            handleClickAddGenres={handleClickAddGenres}
            handleClickAddTags={handleClickAddTags}
            genresList={genresList}
            tagsList={tagsList}
            genresAdded={genresAdded}
            tagsAdded={tagsAdded}
            genres={genres}
            tags={tags}
            onInputChange={onInputChange}
            handleGenderChange={handleGenderChange}
          />
        </section>
        <div className="buttonWrapper">
          <Button
            className="launchButton"
            buttonText={content.RATE_TRACKS_TEXT}
            onClick={() => handleButtonClick(true)}
          ></Button>
          <Button
            className="launchButton"
            buttonText={content.ORDER_FEEDBACK_TEXT}
            onClick={() => handleButtonClick(false)}
          ></Button>
        </div>
      </React.Fragment>
    );
  }
  if (hitRequestBox && proRequestBox) {
    style = {
      height: "initial",
    };
    containerContents = (
      <React.Fragment>
        <section className="formContainer">
          <header className="formHeaderContainer">
            <div className="formHeaderText">
                {content.DETAILS_TITLE}
            </div>
          </header>
          <DetailsForm
            city={city}
            gender={gender}
            dob={dob}
            handleClickToggleAddList={handleClickToggleAddList}
            handleClickAddGenres={handleClickAddGenres}
            handleClickAddTags={handleClickAddTags}
            genresList={genresList}
            tagsList={tagsList}
            genresAdded={genresAdded}
            tagsAdded={tagsAdded}
            genres={genres}
            tags={tags}
            onInputChange={onInputChange}
            handleGenderChange={handleGenderChange}
          />
        </section>
        <section className="formContainer">
          <PriceForm
            onInputChange={onInputChange}
            sendMe={sendMeText}
            price={price}
            describeSelf={bio}
          />
        </section>
        <div className="buttonWrapper">
          <Button
            className="launchButton"
            buttonText={content.RATE_TRACKS_TEXT}
            onClick={() => handleButtonClick(true)}
            disabled={""}
          />
          <Button
            className="launchButton"
            buttonText={content.ORDER_FEEDBACK_TEXT}
            onClick={() => handleButtonClick(false)}
            disabled={""}
          />
        </div>
      </React.Fragment>
    );
  }
  if (!hitRequestBox && !proRequestBox) {
    style = {
      height: "812px",
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
        <br />
        {content.DESCRIPTION_B}
      </div>
      <div className="requestBoxesContainer">
        <div
          onClick={(e) => handleClickRequestBoxes(e)}
          className={cx("requestBox", hitRequestBoxSelected)}
          id="hitRequestBox"
        >
          <div className="requestBoxContents">
            <label>{content.HIT_REQUESTS_TITLE}</label>
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
        <div
          onClick={(e) => handleClickRequestBoxes(e)}
          className={cx("requestBox", proRequestBoxSelected)}
          id="proRequestBox"
        >
          <div className="requestBoxContents">
            <label>{content.PRO_REQUESTS_TITLE}</label>
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
