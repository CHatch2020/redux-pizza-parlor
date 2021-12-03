import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function Checkout() {
  console.log('inside Checkout');
  const cart = useSelector ((store) => store.orderListReducer);
  const customer = useSelector((state) => state.customerReducer);
  const history = useHistory();
  
  const handleCheckout =() => {
    console.log('inside handleCheckout');
    axios ({
      method: 'POST',
      url:
    }).then ((response) => {
      console.log('order details', response);
    }).catch((error) => {
      console.log('console');
    });
    return (
      <section>
      <h2>Order Information</h2>
      <p>{nameofreducer.customer_name}</p>
      <p>{nameofreducer.street_address}</p>
      <p>{nameofreducer.city}</p>
      <p>{nameofreducer.zip}</p>
      <p>{nameofreducer.type}</p>
      <p>{nameofreducer.total}</p>
      <p>{nameofreducer.time}</p>
      <table>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Cost</th>
            <th><button onClick={handleCheckout}>Checkout</button></th>
          </tr>
          <tr>
              <td>{nameofreducer.name}</td>
              <td>{nameofreducer.price}</td>
          </tr>
          
        </tbody>
      </table>
    </section>
    );
  }
}
  export default Checkout;
