import React from 'react';
import { StateMachineProvider, createStore } from "little-state-machine";
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import { Switch, Route } from 'react-router-dom';
import './App.css';



createStore({
  data: {
    country: '',
    year: '',
    income: null
  }
});

function App() {
  return (
    <div className="App">
      <StateMachineProvider>
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route exact path='/result' component= { Result } />      
        </Switch>
      </StateMachineProvider>      
    </div>
  );
}

export default App;
