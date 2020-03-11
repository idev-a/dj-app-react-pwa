import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaField = ({
  rows,
  id,
  className,
  placeholder,
  hasIcon,
  onChange,
  iconName,
  type,
  value,
  disabled
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
    <TextArea 
      rows={rows}
      id={id}
      className={className}
      style={style}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
      disabled={disabled}
    />
  );
};

export default TextAreaField;