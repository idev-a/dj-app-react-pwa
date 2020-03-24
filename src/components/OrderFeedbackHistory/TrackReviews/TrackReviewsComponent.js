import React from "react";
import content from "./content";
import "./TrackReviews.styles.scss";
import CardSet from "./CardSet/CardSet";

const TrackReviewsComponent = ({ data, handleTrackReviewFeedback }) => {
  return (
    <section className="trackReviewsComponentContainer">
      <div className="trackReviewsTitle">{content.TITLE}</div>
      <div className="mainHitStatsRow">
        <div className="mainHitStatsCols">
          {data?.campaign}
          <div className="colTitles">{content.COL_TITLE_1}</div>
        </div>
        <div className="mainHitStatsCols">
          {data?.avgRating && (
            <div className="ratingRow">
              {data?.avgRating}
              <span className="dividendFont">/10</span>
            </div>
          )}
          <div className="colTitles">{content.COL_TITLE_2}</div>
        </div>
      </div>
      <CardSet
        data={data}
        handleTrackReviewFeedback={handleTrackReviewFeedback}
      />
    </section>
  );
};

export default TrackReviewsComponent;
