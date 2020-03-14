import React from "react";
import Card from "./Card/Card";

const CardSet = ({
  isOpen,
  setExpandToggle,
  data,
  handleTrackReviewFeedback
}) => {
  const cardArray = data?.trackRatings?.map((cardData, i) => {
    return (
      <Card
        id={i}
        cardData={cardData}
        key={i}
        handleTrackReviewFeedback={handleTrackReviewFeedback}
      />
    );
  });

  return cardArray;
};

export default CardSet;
