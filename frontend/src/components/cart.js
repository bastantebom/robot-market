import React from "react";
import "../styles/cart.css";
import CartItem from "./cart-item";

const Cart = ({ cart, addQuantity, reduceQuantity }) => {
  return (
    <div className="cart__container">
      <p className="cart__title">Shopping Cart</p>
      {cart.map((cartItem, index) => {
        return (
          <CartItem
            key={index}
            cartItem={cartItem}
            addQuantity={addQuantity}
            reduceQuantity={reduceQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
