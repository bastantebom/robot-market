import React, { useState, useEffect } from "react";
import Api from "../src/services/Api.js";
import Item from "../src/components/item.js";
import "../src/styles/index.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const getRobots = async () => {
    const robotsResponse = await Api.getRobots();
    setRobots(robotsResponse.data);
  };

  useEffect(() => {
    getRobots();
  }, []);

  return (
    <div className="App">
      <h1>Robot Market</h1>
      {/*Add your code here*/}
      <div className="container">
        {robots.map((robot) => {
          return <Item robot={robot} />;
        })}
      </div>
    </div>
  );
};

export default App;
