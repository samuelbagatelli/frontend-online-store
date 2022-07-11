import React from 'react';
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Search from './pages/Search';
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
      quantity: 1,
    };
  }

  addToCart = (_event, title, thumbnail, price) => {
    const { cartItems, quantity } = this.state;

    this.setState({ cartItems: [...cartItems, {
      title,
      thumbnail,
      price,
    }],
    }, () => {
      const teste = cartItems.some((element) => element.title === title);

      if (teste) {
        this.setState({ quantity: quantity + 1 });
      }
    });
  }

  render() {
    const { cartItems, quantity } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCart
                cartItems={ cartItems }
                quantity={ quantity }
              />
            </Route>
            <Route exact path="/">
              <Search
                addToCart={ this.addToCart }
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
