import React, { useState } from "react";
import moment from "moment";
import content from "./content";
import "./Card.styles.scss";
import Icon from "../../../../../common/IconComponent";

const Card = ({ isOpen, cardData }) => {
  const [isExpanded, setExpandedState] = useState(isOpen);
  let header;
  const sorted = [
    cardData.stats.hit,
    cardData.stats.miss,
    cardData.stats.potential,
  ].sort((a, b) => b - a);
  sorted[0] === cardData.stats.hit
    ? (header = {
        iconName: "thumbs_up_blue",
        descriptionType: "HIT",
        hits: true,
      })
    : sorted[0] === cardData.stats.miss
    ? (header = {
        iconName: "thumbs_down",
        descriptionType: "MISS",
        misses: true,
      })
    : (header = {
        iconName: "thumbs_up_down_dark",
        descriptionType: "POTENTIAL",
        potential: true,
      });
  let expandedBoxHeader;
  if (cardData.stats.hit > 89) {
    expandedBoxHeader = "Listeners loved this track!";
  } else if (cardData.stats.hit > 79) {
    expandedBoxHeader = "Listeners rated this track good!";
  } else if (cardData.stats.hit > 69) {
    expandedBoxHeader = "Listeners rated this track average!";
  } else if (cardData.stats.hit > 59) {
    expandedBoxHeader = "Listeners rated this track below average!";
  } else {
    expandedBoxHeader = "Listeners rated this track poor!";
  }

  return (
    <section className="hitStatsSubContainers">
      <div
        onClick={() => setExpandedState(!isExpanded)}
        className="subContainerHeader"
      >
        <span className="expandIcon">{!isExpanded ? "+" : "-"}</span>
        <Icon className="headerIcon" iconName={header.iconName} />
        <div className="headerPercentageLabel">{sorted[0] ? sorted[0] : 0}</div>
        <div className="headerPercentSignLabel">%</div>
        <div className="descriptionContainer">
          <div className="descriptionDateRange">
            {`${moment(cardData.created_on).format("MM/DD/YYYY")} - ${moment(
              cardData.updated_on
            ).format("MM/DD/YYYY")}`}
          </div>
          <span className="descriptionPercentage">{sorted[0] ? sorted[0] : 0}% voted</span>
          &nbsp;
          <span className="descriptionType">"{header.descriptionType}"</span>
        </div>
      </div>

      {isExpanded && (
        <React.Fragment>
          <div className="trackDescription">
            <div className="trackTitle">{cardData.trackTitle}</div>
            <div className="trackLength">{/* {cardData.length} */}</div>
          </div>
          <div className="expandedBoxHeader">{expandedBoxHeader}</div>
          <div className="statsContainerRow">
            <div className="statsContainerCols">
              <Icon className="colIcons iconOpacityControl" iconName="group_dark" />
              <div className="listenerNumberLabel">{cardData.listenersCount}</div>
              <div className="listenerTypeLabel">{content.LISTENERS}</div>
            </div>
            <div className="statsContainerCols">
              <Icon className="colIcons" iconName="thumbs_up_blue" />
              <div className="hitsNumberLabel highlighted">{cardData.stats.hit ? cardData.stats.hit : 0}%</div>
              <div className="hitsTypeLabel highlighted">{content.HITS}</div>
            </div>
            <div className="statsContainerCols">
              <Icon className="colIcons" iconName="thumbs_down" />
              <div className="missesNumberLabel">{cardData.stats.miss ? cardData.stats.miss : 0}%</div>
              <div className="missesTypeLabel">{content.MISSES}</div>
            </div>
            <div className="statsContainerCols">
              <Icon className="colIcons" iconName="thumbs_up_down_dark" />
              <div className="potentialNumberLabel">{cardData.stats.potential ? cardData.stats.potential : 0}%</div>
              <div className="potentialTypeLabel">{content.POTENTIAL}</div>
            </div>
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

Card.defaultProps = {
  isOpen: false,
};

export default Card;
