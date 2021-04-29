import React from "react";

const ReduceQuantity = ({ cartItem, reduceQuantity }) => {
  return (
    <div
      className="quantity__buttons"
      onClick={() => {
        reduceQuantity(cartItem);
      }}
    >
      <p className="quantity__minus">-</p>
    </div>
  );
};

export default ReduceQuantity;
