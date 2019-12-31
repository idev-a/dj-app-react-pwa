import React from "react";

const TextAreaField = ({
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
    <textarea
      id={id}
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default TextAreaField;