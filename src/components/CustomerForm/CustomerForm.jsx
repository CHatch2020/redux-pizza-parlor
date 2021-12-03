import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

import './CustomerForm.css'

function CustomerForm() {
  const dispatch = useDispatch();
  const pizzaCart = useSelector((store) => store.pizzaCart);

  let [newCustomer, setNewCustomer] = useState({
    customer_name: "",
    street_address: "",
    city: "",
    zip: 0,
    type: "",
    total: getTotalPrice(pizzaCart),
    date: Date(),
  });

    function getTotalPrice(pizzaCart){
        let total = 0;
        for(let pizza of pizzaCart){
            total += Number(pizza.price);
        };
        return total.toFixed();
    };

  const history = useHistory();
  const goToCheckout = () => {
    console.log('Going to Checkout');
    history.push('/checkout');
  }

  const addNewCustomer = (event) => {
    console.log("new customer dispatch", newCustomer);
    dispatch({
      type: "ADD_CUSTOMER",
      payload: newCustomer,
    });
    goToCheckout();
  };



  const handleNameChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      customerName: event.target.value,
    });
  };

  const handleAddressChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      street_address: event.target.value,
    });
  };

  const handleCityChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      city: event.target.value,
    });
  };

  const handleZipChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      zip: event.target.value,
    });
  };

  const handleTypeChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      type: event.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={(event) => addProduct(event)}>
        <input onChange={handleNameChange} type="text" placeholder="name" className="infoInputs" />
        <input
          onChange={handleAddressChange}
          type="text"
          placeholder="street address"
          className="infoInputs"
        />
        <input onChange={handleCityChange} type="text" placeholder="city" className="infoInputs" />
        <input onChange={handleZipChange} type="number" placeholder="zip" className="infoInputs" />
        <input
          onChange={handleTypeChange}
          type="radio"
          value="Pickup"
          name="pickup"
          className="radioButtons"
        />
        <label htmlFor="pickup">Pickup</label>
        <input
          onChange={handleTypeChange}
          type="radio"
          value="Delivery"
          name="delivery"
        />
        <label htmlFor="delivery">Delivery</label>
      </form>

        <button onClick={addNewCustomer}>NEXT</button>
  
    </div>
  );
};

export default CustomerForm;
