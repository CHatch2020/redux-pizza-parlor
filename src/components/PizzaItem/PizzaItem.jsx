import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}){

    const dispatch = useDispatch();
    const [cartButton, setCartButton] = useState(true);

    // const displayButton = () => {
    //     setCartButton(!cartButton);
    // };

    // const flipButton = () => {
    //     if(cartButton){
    //         return <button onClick={addPizzaToCart}>Add</button>
    //     }else{
    //         return <button onClick={addPizzaToCart}>Remove</button> //Needs remove dispatch?
    //     }
    // };

    const addPizzaToCart = () => {
        console.log('Pizza object being added to cart:', pizza);
        dispatch({
            type: 'ADD_TO_CART',
            payload: pizza
        });
    };

    return(
        <div>
            {/* <img src="{pizza.image_path}" />*/}
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p> 
            {/* ^^ Float this to the right. */}

            <button onClick={addPizzaToCart}>Add</button>
        </div>
    );
};

export default PizzaItem;