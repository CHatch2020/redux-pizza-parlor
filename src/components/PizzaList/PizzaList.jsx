import React from "react";
import { useSelector } from "react-redux";


import "./PizzaList.css";
import PizzaItem from "../PizzaItem/PizzaItem";

function PizzaList() {
  const getPizzaList = useSelector((store) => store.pizzaListReducer);

  return (
    <div>
      <h2>Step 1: Select Your Pizza</h2>
      {getPizzaList.map((pizza, i) => {
        return <PizzaItem key={i} pizza={pizza} />;
      })}
    </div>
  );
};

export default PizzaList;
