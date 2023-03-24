/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';

import Calculator from './components/calculator/calculator';
import Quote from './components/quotes/quote';

const App = () => (
  <div className="container">
    <Quote />

    <Calculator />
  </div>
);

export default App;
