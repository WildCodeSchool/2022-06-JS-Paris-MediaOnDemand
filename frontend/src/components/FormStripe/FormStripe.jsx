import React, { useMemo } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./FormStripe.scss";
import { DeleteIcon } from "@assets/svgIcon";
import { Button } from "@components";
import { useResize } from "@tools/useResize";

const useOptions = () => {
  const { width } = useResize();

  const size = width < 768 ? "12px" : "18px";

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: size,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

export const FormStripe = ({ handlePurchase, stripeArticle, setIsPay }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (payload.paymentMethod) {
      handlePurchase(stripeArticle);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-stripe">
      <DeleteIcon onClick={() => setIsPay(false)} />
      <h3>Coordonée Bancaire</h3>
      <CardElement options={options} />
      <Button buttonSize="small" buttonStyle="dark" isSubmit disabled={!stripe}>
        Payer
      </Button>
    </form>
  );
};
