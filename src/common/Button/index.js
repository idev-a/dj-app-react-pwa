import React from "react";
import PropTypes from "prop-types";
import IconComponent from "../IconComponent";

const Button = ({ className, hasIcon, onClick, buttonText, isIcon, iconName, disabled }) => {
  let style;
  if (hasIcon) {
    style = {
      background: `url('../../img/${iconName}.png') no-repeat`,
      backgroundSize: "17px 17px",
      backgroundPosition: "205px calc(50% - 1px)",
      paddingRight: "35px",
    }
  }
  return !isIcon ? (
    <button className={className} style={style} onClick={onClick} disabled={disabled}>
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
