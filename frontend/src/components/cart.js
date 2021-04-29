import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import CartItem from "./cart-item";

const Cart = ({ cart }) => {
  return (
    <div className="cart__container">
      <p className="cart__title">Shopping Cart</p>
      {cart.map((cartItem, index) => {
        return <CartItem key={index} cartItem={cartItem} />;
      })}
    </div>
  );
};

export default Cart;
