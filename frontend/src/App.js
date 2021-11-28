import React from 'react';
import './App.css';
import Nav from './design/Nav.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './design/pages/Home';
import Dashboard from './design/pages/Dashboard';
import Api from './design/pages/Api';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/Api' element={<Api/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
