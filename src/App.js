import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/Search';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Search } />
          <p>Teste</p>
          <Categories />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
