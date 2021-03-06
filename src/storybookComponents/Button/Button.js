import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";
  if (props.large) {
    classList += ` button-large`;
  }

  return (
    <button className={classList} onClick={props.handleClick}>
      <div className={props.background}></div>
      {props.label}
    </button>
  );
};

export default Button;
