import React from "react";
import PropTypes from "prop-types";
import IconComponent from "../IconComponent";

<<<<<<< HEAD
const Button = ({ className, iconClassName, onClick, buttonText, hasIcon, isIcon, iconName, disabled }) => {
  return !isIcon ? (
    !hasIcon ? 
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button> :
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
=======
const Button = ({ className, iconClassName, onClick, buttonText, isIcon, iconName, disabled }) => {
  return !isIcon ? (
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
>>>>>>> changed Button icon incorporation method
      <IconComponent className={iconClassName} iconName={iconName} />
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
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  isIcon: PropTypes.bool
};

Button.defaultProp = {
    isIcon: false,
    disabled: false,
    buttonText: "",
};

export default Button;