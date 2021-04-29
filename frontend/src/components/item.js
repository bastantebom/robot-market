import React from "react";
import "../styles/card.css";
import { formatDate } from "../utils/index.js";
import NumberFormat from "react-number-format";
import AddToCart from "./add-to-cart.js";

const Item = ({ robot, handleAddToCart }) => {
  return (
    <div className="card">
      <img src={robot.image} alt="Robot" className="card__image" />
      <p className="card__name">{robot.name}</p>
      <div className="robot__details">
        <div className="card__info">
          <div className="info__label">Price</div>
          <NumberFormat
            className="info__value"
            value={robot.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"฿"}
          />
        </div>
        <div className="card__info">
          <div className="info__label">Stock Quantity</div>
          <div className="info__value">{robot.stock}</div>
        </div>
        <div className="card__info">
          <div className="info__label">Created Date</div>
          <div className="info__value">{formatDate(robot.createdAt)}</div>
        </div>
        <div className="card__info">
          <div className="info__label">Material</div>
          <div className="info__value">{robot.material}</div>
        </div>
        <div className="add__cart">
          <AddToCart handleClick={handleAddToCart} stock={robot.stock} />
        </div>
      </div>
    </div>
  );
};

export default Item;
