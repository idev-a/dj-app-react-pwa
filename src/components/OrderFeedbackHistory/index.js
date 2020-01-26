import React from "react";
import content from "./content";
import "./styles.scss";
import Icon from "../../common/IconComponent";
import Button from "../../common/Button";
import HitStatsComponent from "./HitStats/HitStatsComponent";
import TrackReviewsComponent from "./TrackReviews/TrackReviewsComponent";
import FooterNav from "../FooterNav";
import Menu from "../Menu";
import PopUps from "../PopUps/PopUpsComponent";

const OrderFeedbackHistoryComponent = ({ 
  hitStats, 
  setToggle, 
  data, 
  menuIsOpen, 
  handleClickMenuToggle,
  loading
}) => {
  return (
    <div className="orderFeedbackHistoryContainer">
      {/* <header className="orderFeedbackHistoryHeader">
        <div onClick={() => handleClickMenuToggle(!menuIsOpen)} className="menuIconContainer">
          <Icon iconName="menu" className="menuIcon" />
        </div>
        {menuIsOpen && (
          <Menu handleClickMenuToggle={handleClickMenuToggle} />
        )}
      </header> */}
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
      {loading && (<PopUps name="orderProcessing" />)}
      <FooterNav />
    </div>
  );
};

export default OrderFeedbackHistoryComponent;
