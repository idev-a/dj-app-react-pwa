import React from "react";
import content from "./content";
import "./styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import HitStatsComponent from "./HitStats/HitStatsComponent";
import TrackReviewsComponent from "./TrackReviews/TrackReviewsComponent";

const OrderFeedbackHistoryComponent = ({ hitStats, setToggle, data }) => {
  return (
    <div className="orderFeedbackHistoryContainer">
      <header className="orderFeedbackHistoryHeader">
        <Icon iconName="menu" className="menuIcon" />
      </header>
      <section className="orderFeedbackHistoryHeaderText">
        <div>
          <strong>{content.TITLE_1}</strong>
        </div>
        <div>{content.TITLE_2}</div>
      </section>
      <section className="orderFeedbackHistoryButtonWrapper">
        <Button
          className={`statsButtons ${hitStats ? "hitStatsButtonSelected" : ""}`}
          buttonText={content.STATS_BUTTON_1}
          onClick={() => setToggle(!hitStats)}
          disabled={hitStats}
        />
        <Button
          className={`statsButtons hidden ${
            !hitStats ? "trackReviewsButtonSelected" : ""
          }`}
          buttonText={content.STATS_BUTTON_2}
          onClick={() => setToggle(!hitStats)}
          disabled={!hitStats}
        />
      </section>
      {hitStats ? (
        <HitStatsComponent data={data} />
      ) : (
        <TrackReviewsComponent data={data} />
      )}
    </div>
  );
};

export default OrderFeedbackHistoryComponent;
