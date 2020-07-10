import React from 'react'
import {store} from '../App'

const Number = () => {
    const handelSetValue = (e) => {
       store.dispatch({ type:'SETVALUE', payload:e.target.value})
    }
    return (
        <div>
        <div class="profile" id='profile'>{}</div> 
       <input type="number" name="number" min="0" onChange={handelSetValue}></input>
       </div>
    );
};
export default Number