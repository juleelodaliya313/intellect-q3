// src/components/Button.js
import React from "react";

const Button = ({ children, variant, size, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`btn btn-${variant} btn-${size} ${className}`}
  >
    {children}
  </button>
);

export default Button;
