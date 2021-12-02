import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();

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
  





  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <PizzaList />
  
    </div>
  );
}

export default App;
