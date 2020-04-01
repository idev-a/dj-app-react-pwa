import React, { useState } from "react";
import "./styles.scss";
import RatingCard from "./RatingCard";
import Button from "../../../../common/Button";

const getClassNameForCategories = category => {
  if (category === "MUSIC_CREATORS") {
    return {
      buttonWrapperClassName: "creatorsButtonWrapper",
      buttonClassName: "creatorsButton"
    };
  }
  if (category === "MUSIC_PROFESSIONALS") {
    return {
      buttonWrapperClassName: "executivesButtonWrapper",
      buttonClassName: "executivesButton"
    };
  }
  if (category === "MUSIC_FANS") {
    return {
      buttonWrapperClassName: "fansButtonWrapper",
      buttonClassName: "fansButton"
    };
  }
};
const Card = ({ category, categoryDetails }) => {
  const [isExpanded, setExpandedState] = useState(false);

  const cardArray = categoryDetails.listeners.map(listener => (
    <RatingCard listener={listener} />
  ));
  const classes = getClassNameForCategories(category);
  return (
    <React.Fragment>
      <div className={classes.buttonWrapperClassName}>
        <Button
          className={classes.buttonClassName}
          buttonText={categoryDetails.categoryName}
          onClick={() => setExpandedState(!isExpanded)}
          disabled={false}
        />
      </div>
      {isExpanded && cardArray.length > 0 && <ul>{cardArray}</ul>}
      {isExpanded && cardArray.length === 0 && <p>No listener found.</p>}
    </React.Fragment>
  );
};

export default Card;
