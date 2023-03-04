
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'
// History
import history from './utils/history.js'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home'

function App() {
  return (
    <Router  history={history}>
    {/* <Header /> */}
    <Route path='/' component={Home} exact />
        <Container>
            <Route path='/Login' component={Login}  />
            <Route path='/Registration' component={Registration} />
            <Route path='/dashboard' component={Dashboard}/>
           
          
        </Container>

  
</Router>
  );
}

export default App;
