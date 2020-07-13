import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {bowieReducer} from './reducers'



ReactDOM.render(<Provider store={createStore(bowieReducer)} ><App /></Provider>, document.getElementById('root'));
