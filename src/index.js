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
            return action.payload;
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
        customerReducer
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
