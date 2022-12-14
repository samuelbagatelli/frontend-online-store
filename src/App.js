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
      productRating: [],
    };
  }

  setStateApp = (...param) => {
    const [title, thumbnail, price, id, attributes] = param;
    this.setState({ productDetail: [title, thumbnail, price, id, attributes] });
  }

  decrease = (id, title, price, quantity) => {
    const { productAddCart } = this.state;

    const verifyItens = productAddCart.some(({ id: idProduct }) => idProduct === id);

    const object = {
      id,
      title,
      price,
      totalPrice: price,
      quantity,
    };

    if (!verifyItens) {
      this.setState((prevState) => ({
        productAddCart: [...prevState.productAddCart, object],
      }));
    } else {
      const newState = productAddCart.map((product) => {
        const {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          quantity: quantityProduct } = product;

        let newQuantity = idProduct === id ? quantityProduct - 1 : quantityProduct;
        if (!newQuantity) {
          newQuantity = 1;
        }
        const newPrice = priceProduct * newQuantity;

        const newObjectProduct = {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          totalPrice: newPrice.toFixed(2),
          quantity: newQuantity,
        };

        return newObjectProduct;
      });

      this.setState({ productAddCart: newState });
    }
  }

  setStateCart = (id, title, price, quantity) => {
    const { productAddCart } = this.state;

    const verifyItens = productAddCart.some(({ id: idProduct }) => idProduct === id);

    const object = {
      id,
      title,
      price,
      totalPrice: price,
      quantity,
    };

    if (!verifyItens) {
      this.setState((prevState) => ({
        productAddCart: [...prevState.productAddCart, object],
      }));
    } else {
      const newState = productAddCart.map((product) => {
        const {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          quantity: quantityProduct } = product;

        const newQuantity = idProduct === id ? quantityProduct + 1 : quantityProduct;
        const newPrice = priceProduct * newQuantity;

        const newObjectProduct = {
          id: idProduct,
          title: titleProduct,
          price: priceProduct,
          totalPrice: newPrice.toFixed(2),
          quantity: newQuantity,
        };

        return newObjectProduct;
      });

      this.setState({ productAddCart: newState });
    }
  }

  handleProductRating = (newObjectRating) => {
    this.setState((prevState) => ({
      productRating: [...prevState.productRating, newObjectRating],
    }));
    const teste = JSON.stringify(newObjectRating);
    localStorage.setItem('rating', teste);
  }

  componentDidMount= () => {
    const storage = JSON.parse(localStorage.getItem('rating'));
    if (storage) { this.setState({ productRating: [storage] }); }
  }

  render() {
    const { productDetail, productAddCart, productRating } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCart
                productAddCart={ productAddCart }
                setStateCart={ this.setStateCart }
                decrease={ this.decrease }
              />
            </Route>
            <Route exact path="/">
              <Search
                setStateApp={ this.setStateApp }
                setStateCart={ this.setStateCart }
              />
            </Route>
            <Route path="/product-detail">
              <ProductDetail
                productDetail={ productDetail }
                setStateCart={ this.setStateCart }
                handleProductRating={ this.handleProductRating }
                productRating={ productRating }
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
