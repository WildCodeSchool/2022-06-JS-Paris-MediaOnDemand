import React from "react";
import "./button.scss";

const STYLES = { dark: "btn--darkBackground", light: "btn--lightBackground" };

const SIZES = { small: "btn--small", large: "btn--large" };

// eslint-disable-next-line react/prop-types
export default function Button({ children, onClick, buttonStyle, buttonSize }) {
  return (
    <button
      className={`${SIZES[buttonSize]} ${STYLES[buttonStyle]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
