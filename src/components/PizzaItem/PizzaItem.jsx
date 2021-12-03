import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}){

    const dispatch = useDispatch();
    const [cartButton, setCartButton] = useState(true);

    const displayButton = () => {
        setCartButton(!cartButton);
    };

    const flipButton = () => {
        if(cartButton == true){
            return <button onClick={addPizzaToCart}>Add</button>
        }else{
            return <button onClick={removePizzaFromCart}>Remove</button>
        };
    };

    const removePizzaFromCart = () => {
        console.log('Pizza object being removed from cart:', pizza);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: pizza
        });
        displayButton();
        
    };

    const addPizzaToCart = () => {
        console.log('Pizza object being added to cart:', pizza.name);
        dispatch({
            type: 'ADD_TO_CART',
            payload: pizza
        });
        displayButton();
    };

    return(
        <div>
            <img src={pizza.image_path} />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p> 
            {/* ^^ Float this to the right. */}
            <div>{flipButton()}</div>
        </div>
    );
};

export default PizzaItem;