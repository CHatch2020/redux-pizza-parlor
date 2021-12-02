import React from "react";
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import "./PizzaList.css";
import PizzaItem from "../PizzaItem/PizzaItem";
import CustomerForm from "../CustomerForm/CustomerForm";

function PizzaList() {
  const getPizzaList = useSelector((store) => store.pizzaListReducer);

  return (
    <div>
      <h2>Step 1: Select Your Pizza</h2>
      {getPizzaList.map((pizza, i) => {
        return <PizzaItem key={i} pizza={pizza} />;
      })}
      <Router>
        <Route exact path="/form">
          <CustomerForm />
        </Route>
        <Link to="/form">
          <button>Next</button>
        </Link>
      </Router>
    </div>
  );
}

export default PizzaList;
