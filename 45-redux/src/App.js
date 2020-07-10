
import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Number from './components/Number'
import { createStore } from 'redux'


const initialState = {
    count:0,
    value:1,
    message: ''

  }

const reducer = (state=initialState, action) => {

  switch(action.type){
    case 'INCREASE':
      return {...state, count: state.count+parseInt(state.value), message: action.payload}
    case 'DECREASE':
      if(state.value <= state.count ){
        return {...state, count: state.count-parseInt(state.value), message: action.payload}
      } 
      return state
    case 'SETVALUE':
      return {...state, value: action.payload}
    default: 
      return state  
  }
}
export const store = createStore(reducer)

export class App extends React.Component {


  render(){

    store.subscribe(()=>{
      this.forceUpdate()
    })
    console.log(store)
  return(
    <div class="container">

      <Number/>
      <Counter  />
    </div>
    );
  } 
}

