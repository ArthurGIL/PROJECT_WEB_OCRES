import React from 'react';
import './App.css';
import Nav from './design/Nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './design/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
