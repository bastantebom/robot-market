import React from "react";
import NumberFormat from "react-number-format";
import AddQuantity from "./add-quantity.js";
import ReduceQuantity from "./reduce-quantity.js";

const CartItem = ({ cartItem, addQuantity, reduceQuantity }) => {
  return (
    <div className="cart__item">
      <img src={cartItem.image} alt="Robot" className="cart__item__image" />
      <p className="cart__item__name">{cartItem.name}</p>
      <AddQuantity cartItem={cartItem} addQuantity={addQuantity} />
      <p className="cart__item__quantity">{cartItem.quantity}</p>
      <ReduceQuantity cartItem={cartItem} reduceQuantity={reduceQuantity} />
      <NumberFormat
        className="cart__item__amount"
        value={cartItem.quantity * cartItem.price}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"฿"}
      />
    </div>
  );
};

export default CartItem;
