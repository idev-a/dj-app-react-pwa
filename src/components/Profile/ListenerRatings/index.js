import React, { useState } from "react";
import "./styles.scss";
import content from "./content";
import Ratings from "../../../common/Ratings";

const ListenerRatings = ({ listenerRatings }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="formContainer">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="formHeaderContainer"
      >
        <span className="expandIcon">{!isOpen ? "+" : "-"}</span>
        <div className="formHeaderText">{content.RATINGS}</div>
      </header>
      {isOpen &&
        listenerRatings?.ratings?.map?.(rating => (
          <div>
            <Ratings value={rating?.avgRating} disabled />
            <p>{rating?.comment}</p>
          </div>
        ))}
    </section>
  );
};

export default ListenerRatings;
