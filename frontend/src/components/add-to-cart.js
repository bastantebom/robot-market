import React from "react";

const AddToCart = ({ handleClick, stock }) => {
  return (
    <button disabled={!stock} onClick={handleClick}>
      Add to Cart
    </button>
  );
};

//make this component available to the app
export default AddToCart;
