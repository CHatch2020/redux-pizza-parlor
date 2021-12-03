import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}){

    const dispatch = useDispatch();
    const [cartButton, setCartButton] = useState(true);

    const displayButton = () => {
        setCartButton(!cartButton);
    };

    const flipButton = () => { //this is weird - ask Matt for clarification.
        if(cartButton == true){
            return <button onClick={removePizzaFromCart(), displayButton}>Add</button>
        }else{
            return <button onClick={addPizzaToCart(), displayButton}>Remove</button>
        };
    };

    const removePizzaFromCart = () => {
        console.log('Pizza object being removed from cart:', pizza);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: pizza
        });
    };

    const addPizzaToCart = () => {
        console.log('Pizza object being added to cart:', pizza.name);
        dispatch({
            type: 'ADD_TO_CART',
            payload: pizza
        });
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