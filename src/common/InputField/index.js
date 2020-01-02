import React from "react";

const InputField = ({
  id,
  passableRef,
  className,
  placeholder,
  hasIcon,
  onChange,
  iconName,
  type,
  disabled,
  accept,
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
