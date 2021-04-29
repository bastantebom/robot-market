import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/index.js";

const AddToCart = ({ handleClick, robot }) => {
  const { refreshButtons, setRefreshButtons } = useContext(Context);
  const [disabled, setDisabled] = useState(false);

  const getButtonList = async () => {
    const id = robot.name.toLowerCase().replaceAll(" ", "-");
    const buttonLocal = localStorage.getItem("button");
    const existingItem = buttonLocal.includes(id);
    if (existingItem) setDisabled(true);
    setRefreshButtons(false);
  };

  useEffect(() => {
    if (refreshButtons) getButtonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshButtons]);

  return (
    <button
      disabled={!robot?.stock || disabled}
      onClick={() => handleClick(robot)}
      className="cart__button"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
