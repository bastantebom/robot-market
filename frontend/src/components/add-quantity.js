import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/index.js";

const AddQuantity = ({ cartItem, addQuantity }) => {
  const { refreshButtons, setRefreshButtons } = useContext(Context);
  const [disabled, setDisabled] = useState(false);

  const getButtonList = async () => {
    const buttonLocal = localStorage.getItem("button");
    const existingItem = buttonLocal.includes(cartItem.id);
    if (existingItem) setDisabled(true);
    else setDisabled(false);
    setRefreshButtons(false);
  };

  useEffect(() => {
    if (refreshButtons) getButtonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshButtons]);

  return (
    <button
      className={`quantity__buttons ${
        disabled ? "disable__add__quantity" : ""
      }`}
      disabled={disabled}
      onClick={() => {
        addQuantity(cartItem);
      }}
    >
      <p className="quantity__plus">+</p>
    </button>
  );
};

export default AddQuantity;
