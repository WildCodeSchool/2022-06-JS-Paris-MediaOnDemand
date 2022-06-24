import React from "react";
import "./Button.scss";

/* Format d'appel du composant :
<Button
onClick={() => {}}
type="button"
buttonStyle="dark"
buttonSize="large"
>
Go SOPHIA !
</Button>
*/

const STYLES = { dark: "btn--darkBackground", light: "btn--lightBackground" };

const SIZES = { small: "btn--small", large: "btn--large" };

export const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  return (
    <button
      className={`theme--movie ${SIZES[buttonSize]} ${STYLES[buttonStyle]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
