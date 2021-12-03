import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Checkout() {
  console.log('inside Checkout');
  const cart = useSelector ((store) => store.pizzaCart);
  const customer = useSelector((state) => state.customerReducer);
  const history = useHistory();
  
  const handleCheckout =() => {
    console.log('inside handleCheckout');
    axios ({
      method: 'POST',
      url: '/api/order'
    }).then ((response) => {
      console.log('order details', response);
    }).catch((error) => {
      console.log('console');
    });
  }

    return (
      <section>
      <h2>Order Information</h2>
      <p>{customer.customer_name}</p>
      <p>{customer.street_address}</p>
      <p>{customer.city}</p>
      <p>{customer.zip}</p>
      <p>{customer.type}</p>
      <p>{customer.total}</p>
      <p>{customer.time}</p>
      <table>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Cost</th>
            <th><button onClick={handleCheckout}>Checkout</button></th>
          </tr>
          <tr>
              <td>{customer.name}</td>
              <td>{cart.price}</td>
          </tr>
          
        </tbody>
      </table>
    </section>
    );
}
  export default Checkout;
