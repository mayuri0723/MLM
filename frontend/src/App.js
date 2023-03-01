
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
// Routing
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router history={history}>
    {/* <Header /> */}
    <Route path='/' component={MainPage} exact />
        <Container>
            <Route path='/' component={Login} exact  />
            <Route path='/Registration' component={Registration} />
           
          
        </Container>

    <Footer />
</Router>
  );
}

export default App;
