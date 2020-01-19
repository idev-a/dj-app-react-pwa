import React from "react";

const InputField = ({
  id,
  passableRef,
  className,
  placeholder,
  hasIcon,
  iconPosition,
  onChange,
  iconName,
  type,
  disabled,
  accept,
}) => {
  let style;
  if (hasIcon) {
    switch (iconPosition) {
      case "right": 
        style = {
          background: `url('../../img/${iconName}.png') no-repeat`,
          backgroundSize: "17px 17px",
          backgroundPosition: "100% 15%",
          paddingRight: "30px"
        }
        break;
      default: {
        style = {
          background: `url('../../img/${iconName}.png') no-repeat`,
          backgroundSize: "17px 17px",
          backgroundPosition: "8px 16px",
          paddingLeft: "30px"
        }
        break;
      }
    }
  }
  return (
    <input
      id={id}
      accept={accept}
      ref={passableRef}
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
};

InputField.defaultProps = {
  disabled: false,
  passableRef: null,
};

export default InputField;
