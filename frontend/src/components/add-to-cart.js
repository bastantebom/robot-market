import React from "react";

const AddToCart = ({ handleClick, robot }) => {
  return (
    <button
      disabled={!robot?.stock}
      onClick={() => handleClick(robot)}
      className="cart__button"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
