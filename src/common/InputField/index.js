import React from "react";

const InputField = ({
  id,
  className,
  placeholder,
  hasIcon,
  onChange,
  iconName,
  type,
}) => {
  let style;
  if (hasIcon) {
    style = {
      background: `url('../../img/${iconName}.png') no-repeat`,
      backgroundSize: "17px 17px",
      backgroundPosition: "8px 16px",
      paddingLeft: "30px",
    };
  }
  return (
    <input
      id={id}
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default InputField;
