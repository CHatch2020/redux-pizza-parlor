import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const pizzaListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
    }
    return state;
};

const pizzaCart = (state = [], action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            // let stateToReturn = []
            // for (let pizza of state){
            //     if (pizza.id !== action.payload.id){
            //         stateToReturn.push(pizza);
            //     };
            // };

            const stateToReturn = state.filter(pizza => pizza.id !== action.payload.id);
            return stateToReturn;

            // function removePizza(pizza) {
            //     return pizza.filter((singlePizza) => {
            //         return singlePizza.id != action.payload.id;
            //     });
            // };
            // removePizza(state);
    };

    return state;
};

const customerReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return action.payload;
    }
    return state;
}
    

const orderListReducer = (state = [], action) => {
    return state;
};

const storeInstance = createStore(
    combineReducers({
        //Reducers go here
        pizzaListReducer,
        orderListReducer,
        customerReducer,
        pizzaCart
    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
