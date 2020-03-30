import React from "react";
import Rate from "rc-rate";
import "./rating.scss";

const Ratings = ({ disabled, onChange, value }) => {
  return <Rate disabled={disabled} onChange={onChange} value={value} />;
};

export default Ratings;
