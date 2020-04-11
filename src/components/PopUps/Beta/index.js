import React from "react";
import content from "./content";
import "./styles.scss";

const Beta = (props) => {
  return (
    <div className="successContainer">
      <div className="successLabel">{content.BETA}</div>
      <div className="descriptionContainer">
        <div dangerouslySetInnerHTML={{ __html: content.DESCRIPTION_ONE }} />
      </div>
    </div>
  );
};

Beta.defaultProps = {};

export default Beta;
