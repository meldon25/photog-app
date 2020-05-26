import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Screens/Home'
import Index from './Screens/Index'
import About from './Screens/About'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/index">
          <Index />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
