import React, { useContext } from "react";
import content from "./content";
import "./styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import HitStatsComponent from "./HitStats/HitStatsComponent";
import TrackReviewsComponent from "./TrackReviews/TrackReviewsComponent";
import PopUps from "../PopUps/PopUpsComponent";
import { MenuHandlerContext } from "../../routes";

const OrderFeedbackHistoryComponent = ({
  hitStats,
  setToggle,
  tracksHistory,
  trackReviews,
  loading,
  handleTrackReviewFeedback
}) => {
  const handleMenuClick = useContext(MenuHandlerContext);
  return (
    <div className="orderFeedbackHistoryContainer">
      <header className="orderFeedbackHistoryHeader">
      <Button
          isIcon
          iconName="menu"
          className="menuIcon"
          onClick={handleMenuClick}
        />
      </header>
      <header className="orderFeedbackHistoryHeaderText">
        <div>
          <strong>{content.TITLE_1}</strong>
        </div>
        <div>{content.TITLE_2}</div>
      </header>
      <section className="orderFeedbackHistoryWrapper">
        <div className="statsButtonWrapper">
          <Button
            className={`statsButtons ${
              hitStats ? "hitStatsButtonSelected" : ""
            }`}
            buttonText={content.STATS_BUTTON_1}
            onClick={() => setToggle(!hitStats)}
            disabled={hitStats}
          />
          <Button
            className={`statsButtons ${
              !hitStats ? "trackReviewsButtonSelected" : ""
            }`}
            buttonText={content.STATS_BUTTON_2}
            onClick={() => setToggle(!hitStats)}
            disabled={!hitStats}
          />
        </div>

        {hitStats ? (
          <HitStatsComponent data={tracksHistory} />
        ) : (
          <TrackReviewsComponent
            data={trackReviews}
            handleTrackReviewFeedback={handleTrackReviewFeedback}
          />
        )}
        {loading && <PopUps name="orderProcessing" />}
      </section>
    </div>
  );
};

export default OrderFeedbackHistoryComponent;
