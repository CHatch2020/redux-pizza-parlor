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
            let stateToReturn = []
            for (let pizza of state){
                if (pizza.id !== action.payload.id){
                    stateToReturn.push(pizza);
                };
            };

            // const stateToReturn = state.filter(pizza => pizza.id !== action.payload.id);

            return stateToReturn;
    };

    return state;
};

const orderListReducer = (state = [], action) => {
    return state;
};

const storeInstance = createStore(
    combineReducers({
        //Reducers go here
        pizzaListReducer,
        orderListReducer,
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
