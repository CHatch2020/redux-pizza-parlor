import React, { useState} from "react";
import { useDispatch } from 'react-redux';


function CustomerForm() {
  let [newCustomer, setNewCustomer] = useState({
    customerName: "",
    street_address: "",
    city: "",
    zip: 0,
    type: "",
    total: 0,
    time: 0
  });


  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      name: event.target.value,
    });
  }

  const handleAddressChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      street_address: event.target.value,
    });
  }

  const handleCityChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      city: event.target.value,
    });
  }

  const handleZipChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      zip: event.target.value,
    });
  }

  const handleTypeChange = (event) => {
    setNewCustomer({
      ...newCustomer,
      type: event.target.value,
    });
  }


  return (
    <form onSubmit={(event) => addProduct(event)}>
      <input 
        onChange={handleNameChange}
        type='text'
        placeholder='name'
        />
      <input 
        onChange={handleAddressChange}
        type='text'
        placeholder='street address'      
      />
      <input 
        onChange={handleCityChange}
        type='text'
        placeholder='city'      
      />
      <input 
        onChange={handleZipChange}
        type='number'
        placeholder='zip'      
      />
      <input 
        onChange={handleTypeChange}
        type='radio'
        value='Pickup'
        name='pickup'
      />
      <label for='pickup'>Pickup</label>
      <input 
        onChange={handleTypeChange}
        type='radio'
        value='Delivery'
        name='delivery'
      />
      <label for='delivery'>Delivery</label>
    </form>
  );
}

export default CustomerForm;