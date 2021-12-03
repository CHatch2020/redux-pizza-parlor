import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function CustomerForm() {
  const dispatch = useDispatch();

  let [newCustomer, setNewCustomer] = useState({
    customerName: "",
    street_address: "",
    city: "",
    zip: 0,
    type: "",
    total: 0,
    time: 0,
  });


  const addNewCustomer = (event) => {
    console.log("new customer dispatch", newCustomer);
    dispatch({
      type: "ADD_CUSTOMER",
      payload: newCustomer,
    });
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
    <div>
      <form onSubmit={(event) => addProduct(event)}>
        <input onChange={handleNameChange} type="text" placeholder="name" />
        <input
          onChange={handleAddressChange}
          type="text"
          placeholder="street address"
        />
        <input onChange={handleCityChange} type="text" placeholder="city" />
        <input onChange={handleZipChange} type="number" placeholder="zip" />
        <input
          onChange={handleTypeChange}
          type="radio"
          value="Pickup"
          name="pickup"
        />
        <label for="pickup">Pickup</label>
        <input
          onChange={handleTypeChange}
          type="radio"
          value="Delivery"
          name="delivery"
        />
        <label for="delivery">Delivery</label>
      </form>
      <Router>
        <Route>
          <Link to="/checkout">
            <button onClick={addNewCustomer}>NEXT</button>
          </Link>
        </Route>
      </Router>
    </div>
  );
}

export default CustomerForm;
