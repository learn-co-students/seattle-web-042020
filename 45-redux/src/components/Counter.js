import React from 'react'
import {store} from '../App'

const Counter = () => {

        const increment = () =>{
           store.dispatch({type: 'INCREASE', payload: `Added ${store.getState().value}!`})
        }

        const decrement = () =>{
            store.dispatch({type:'DECREASE', payload: `sub ${store.getState().value}!`})
        }
    

    return (
        <div>
        <div class="counter" id='counter'>{store.getState().count}</div> 
        <div>
            {store.getState().message}
        </div>
        <button onClick = {increment}> Add  </button> 
        <button onClick = {decrement}> Minus  </button> 
       </div>
    );
};
export default Counter