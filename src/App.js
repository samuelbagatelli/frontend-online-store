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
    };
  }

  addToCart = (_event, { title, thumbnail, price, quantity }) => {
    const { cartItems } = this.state;

    const validation = cartItems.some((element) => element.title === title);

    if (validation) {
      cartItems.forEach((element) => {
        if (element.title === title) {
          element.quantity += 1;
        }
      });
    } else {
      this.setState({ cartItems: [...cartItems, {
        title,
        thumbnail,
        price,
        quantity,
      }],
      });
    }
  }

  render() {
    const { cartItems } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCart
                cartItems={ cartItems }
                handleRemove={ this.handleRemove }
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
