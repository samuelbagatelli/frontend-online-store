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
      productAddCart: [],
    };
  }

  setStateApp = (title, thumbnail, price, attributes) => {
    this.setState({ productDetail: [title, thumbnail, price, attributes] });
  }

  setStateCart = (title, price, quantity) => {
    const object = {
      title,
      price,
    };
    this.setState((prevState) => ({
      productAddCart: [...prevState.productAddCart, object],
    }));
  }

  render() {
    const { productDetail, productAddCart } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCart productAddCart={ productAddCart } />
            </Route>
            <Route exact path="/">
              <Search setStateApp={ this.setStateApp } />
            </Route>
            <Route path="/product-detail">
              <ProductDetail
                productDetail={ productDetail }
                setStateCart={ this.setStateCart }
              />
            </Route>
            <Categories />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
