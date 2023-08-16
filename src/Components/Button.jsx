import React from "react";

const Button = ({
  title,
  containerStyles,
  btnType,
  rightIcon,
  handleClick,
}) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className=" flex-1"> {title}</span>
      {
        rightIcon && <div className=" relative w-6 h-6">{rightIcon}</div>
      }
    </button>
  );
};

export default Button;
