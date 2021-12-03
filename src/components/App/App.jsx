import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {useState} from 'react';


import PizzaList from '../PizzaList/PizzaList';
import CustomerForm from "../CustomerForm/CustomerForm";

function App() {

  const dispatch = useDispatch();
  const [style, setStyle] = useState("")

  useEffect(() =>{
    console.log('in useEffect');
    refreshPizzas();
  }, []);

  function refreshPizzas() {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) =>{
      console.log('Pizza Get response:', response.data);
      dispatch({
        type: 'SET_LIST',
        payload: response.data
      });
    }).catch((error) =>{
      console.log('/api/pizza GET error:', error);
    });
  };
  
  const hideTheButton = () => {
    console.log('Hid Button');
    setStyle("hideButton");
  }



  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <Router>
        <Route exact path="/">
          <PizzaList />
        </Route>
        <Route exact path="/form">
          <CustomerForm />
        </Route>
        
          <p className={style}>
            <Link to="/form"><button onClick={hideTheButton}>Next</button></Link>
          </p>

          <p>
            <Link to="/">Home</Link>
          </p>
      </Router>
  
      {/* <PizzaList />

      <Router>
        <Route exact path="/form">
          <CustomerForm />
        </Route>
        <Link to="/form">
          <button>Next</button>
        </Link>
      </Router> */}
    </div>
  );
}

export default App;
