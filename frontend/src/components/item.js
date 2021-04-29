import React from "react";
import "../styles/card.css";

const Item = ({ robot }) => {
  return (
    <div className="card">
      <img src={robot.image} alt="Robot" className="card__image" />
      <p className="card__name">{robot.name}</p>
    </div>
  );
};

export default Item;
