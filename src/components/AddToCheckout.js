import React from "react";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TO_CART_MUTATION = ``;

function AddToCheckout({ id }) {
  const loading = true;
  const addToCart = function () {
    return true;
  };
  return (
    <button type="button" disabled={loading} onClick={addToCart}>
      Add{loading && "ing!"} To Gallery
    </button>
  );
}

export default AddToCheckout;
export { ADD_TO_CART_MUTATION };
