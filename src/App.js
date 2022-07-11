import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/Search';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './components/ProductDetail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productDetail: [],
    };
  }

  setStateApp = (title, thumbnail, price, attributes) => {
    this.setState({ productDetail: [title, thumbnail, price, attributes] });
  }

  render() {
    const { productDetail } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart" component={ ShoppingCart } />
            <Route exact path="/">
              <Search setStateApp={ this.setStateApp } />
            </Route>
            <Route path="/product-detail">
              <ProductDetail productDetail={ productDetail } />
            </Route>
            <Categories />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
