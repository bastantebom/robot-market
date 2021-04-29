import React from "react";
import "../styles/cart.css";
import CartItem from "./cart-item";
import NumberFormat from "react-number-format";

const Cart = ({ cart, addQuantity, reduceQuantity }) => {
  const getTotal = () => {
    return cart.reduce((sum, i) => {
      return sum + i.price * i.quantity;
    }, 0);
  };
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
      <div className="cart__total__amount">
        <p className="total__amount__label">Total Amount</p>
        <NumberFormat
          className="total__amount__value"
          value={getTotal()}
          displayType={"text"}
          thousandSeparator={true}
          decimalScale={2}
          prefix={"฿"}
        />
      </div>
    </div>
  );
};

export default Cart;
