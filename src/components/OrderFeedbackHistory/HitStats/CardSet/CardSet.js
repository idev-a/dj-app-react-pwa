import React from "react";
import Card from "./Card/Card";

const CardSet = ({
  data = {
    trackStats: [],
  },
}) => {
  const cardArray = data && data.trackStats && data.trackStats.map((cardData, i) => {
    return (
      <Card
        cardData={cardData}
        key={i}
      />
    );
  });

  return cardArray || null;
};

export default CardSet;
