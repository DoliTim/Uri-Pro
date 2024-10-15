// src/components/Checkout.js
import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Checkout = ({ total }) => {
  return (
    <div>
      <h2>Total: €{total}</h2>
      <PayPalButton
        amount={total}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          // OPTIONAL: Call your server to save the transaction
        }}
        options={{
          clientId: "YOUR_PAYPAL_CLIENT_ID",
        }}
      />
    </div>
  );
};

export default Checkout;
