/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/calculator';
import Quote from './components/quotes/quote';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/calculator" element={<Calculator />} />
      <Route exact path="/" element={<Home />} />

      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
