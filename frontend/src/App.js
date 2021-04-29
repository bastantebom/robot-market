import React, { useState, useEffect } from "react";
import Api from "../src/services/Api.js";
import Item from "../src/components/item.js";
import "../src/styles/index.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [cart, setCart] = useState([]);
  const [disabledButton, setDisabledButton] = useState([]);

  let cartLocal = localStorage.getItem("cart");
  let buttonLocal = localStorage.getItem("button");

  const getRobots = async () => {
    try {
      const robotsResponse = await Api.getRobots();
      setRobots(robotsResponse.data);
    } catch (error) {
      console.log(error || error.message);
    }
  };

  const handleAddToCart = (item) => {
    const id = item.name.toLowerCase().replaceAll(" ", "-");
    let newItem = { ...item, id, quantity: 1 };
    const cartCopy = [...cart];
    const existingItem = cartCopy.find((cartItem) => cartItem.id === id);
    if (existingItem) {
      existingItem.quantity += 1;
      if (existingItem.quantity === item.stock) saveDisabledButton(id);
    } else {
      cartCopy.push(newItem);
      if (item.stock === 1) saveDisabledButton(id);
    }
    setCart(cartCopy);
    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const saveDisabledButton = (id) => {
    const buttonCopy = [...disabledButton];
    const existingItem = buttonCopy.includes(id);
    if (!existingItem) buttonCopy.push(id);
    setDisabledButton(buttonCopy);
    const stringButton = JSON.stringify(buttonCopy);
    localStorage.setItem("button", stringButton);
  };

  useEffect(() => {
    getRobots();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    cartLocal = JSON.parse(cartLocal);
    if (cartLocal) setCart(cartLocal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    buttonLocal = JSON.parse(buttonLocal);
    if (buttonLocal) setDisabledButton(buttonLocal);
  }, []);

  return (
    <div className="App">
      <h1>Robot Market</h1>
      <div>
        <div className="container">
          {robots.map((robot) => {
            return (
              <Item
                key={robot.name.toLowerCase().replaceAll(" ", "-")}
                robot={robot}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
