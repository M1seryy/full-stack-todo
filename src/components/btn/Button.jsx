import React from "react";
import "./button.css";

const Button = ({ children }) => {
  return (
    <>
      <button className="started_btn">{children}</button>
    </>
  );
};

export default Button;
