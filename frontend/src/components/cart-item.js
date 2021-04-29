import React from "react";
import NumberFormat from "react-number-format";
import AddQuantity from "./add-quantity.js";
import ReduceQuantity from "./reduce-quantity.js";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cart__item">
      <img src={cartItem.image} alt="Robot" className="cart__item__image" />
      <p className="cart__item__name">{cartItem.name}</p>
      <AddQuantity cartItem={cartItem} />
      <p className="cart__item__quantity">{cartItem.quantity}</p>
      <ReduceQuantity cartItem={cartItem} />
      <NumberFormat
        className="cart__item__amount"
        value={cartItem.quantity * cartItem.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"฿"}
      />
    </div>
  );
};

export default CartItem;
