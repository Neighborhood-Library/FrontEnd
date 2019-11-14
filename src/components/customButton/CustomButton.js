import React from "react";
import "./CustomButton.css";

const CustomButton = ({ children, isRegister, ...otherProps }) => (
  <button
    className={`${isRegister ? "register-button" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
