
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// Routing
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// History
// import history from './history.js'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Header /> */}
        <Route path='/' element={<Home />} exact />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
