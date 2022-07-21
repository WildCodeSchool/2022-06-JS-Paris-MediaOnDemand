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

export const Button = ({
  children,
  onClick,
  buttonStyle = "ligth",
  buttonSize = "small",
  isSubmit,
}) => {
  return (
    <button
      className={`btn_size--${buttonSize} btn--${buttonStyle}Background`}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
