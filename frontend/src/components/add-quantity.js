import React from "react";

const AddQuantity = ({ cartItem, addQuantity }) => {
  return (
    <div
      className="quantity__buttons"
      onClick={() => {
        addQuantity(cartItem);
      }}
    >
      <p className="quantity__plus">+</p>
    </div>
  );
};

export default AddQuantity;
