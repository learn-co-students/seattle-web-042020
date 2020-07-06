import ReactDOM from 'react-dom';
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
