import React from "react";
import PropTypes from "prop-types";
import IconComponent from "../IconComponent";

const Button = ({ className, onClick, buttonText, isIcon, iconName }) => {
  return !isIcon ? (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  ) : (
    <div role="button" onClick={onClick}>
      <IconComponent className={className} iconName={iconName} />
    </div>
      
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Button.defaultProp = {
    isIcon: false,
};

export default Button;
