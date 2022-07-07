import React from 'react';
import './App.css';
import Search from './pages/Search';

import { Switch, BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <p>Teste</p>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
