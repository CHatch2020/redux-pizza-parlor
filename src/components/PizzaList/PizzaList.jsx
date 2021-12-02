import React from 'react';
import {useSelector} from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {

    const getPizzaList = useSelector(store => store.pizzaListReducer)

    return(
        <div>
                {getPizzaList.map((pizza, i) => {
                    return <PizzaItem key={i} pizza={pizza}/>
                })}
        </div>
    )
};

export default PizzaList;