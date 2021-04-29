import React, { useState, useEffect, useContext } from "react";
import Api from "./services/Api.js";
import Card from "./components/card.js";
import Cart from "./components/cart.js";
import "./styles/index.css";
import { Context } from "./context";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [cart, setCart] = useState([]);
  const [disabledButton, setDisabledButton] = useState([]);
  const { setRefreshButtons } = useContext(Context);

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
      if (cartCopy.length < 5) {
        cartCopy.push(newItem);
        if (item.stock === 1) saveDisabledButton(id);
      } else alert("You have reached the maximum number of item in your cart");
    }
    setCart(cartCopy);
    const stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleAddQuantity = (cartItem) => {
    const cartCopy = [...cart];
    cartItem.quantity += 1;
    if (cartItem.quantity === cartItem.stock) saveDisabledButton(cartItem.id);
    else {
      setCart(cartCopy);
      const stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    }
  };

  const handleReduceQuantity = (cartItem) => {
    const cartCopy = [...cart];
    if (cartItem.quantity > 2) {
      cartItem.quantity -= 1;
      setCart(cartCopy);
      const stringCart = JSON.stringify(cartCopy);
      localStorage.setItem("cart", stringCart);
    }
  };

  const saveDisabledButton = (id) => {
    const buttonCopy = [...disabledButton];
    const existingItem = buttonCopy.includes(id);
    if (!existingItem) buttonCopy.push(id);
    setDisabledButton(buttonCopy);
    const stringButton = JSON.stringify(buttonCopy);
    localStorage.setItem("button", stringButton);
    setRefreshButtons(true);
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
      <h1>Robots Market</h1>
      <div className={`main ${cart.length > 0 ? "has__cart" : ""}`}>
        <div className="shop__items">
          {robots.map((robot) => {
            return (
              <Card
                key={robot.name.toLowerCase().replaceAll(" ", "-")}
                robot={robot}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <Cart
          cart={cart}
          addQuantity={handleAddQuantity}
          reduceQuantity={handleReduceQuantity}
        />
      </div>
    </div>
  );
};

export default App;
