import React from "react";
import "./UserCart.scss";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context";

export const UserCart = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div>
      {cart.map((article) => (
        <li>
          <button type="button" onClick={() => navigate()}>
            {article}
          </button>
        </li>
      ))}
    </div>
  );
};
