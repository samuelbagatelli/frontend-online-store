import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [],
    };
  }

  render() {
    const { cartProducts } = this.state;

    return (
      <div className="ShoppingCart">
        { cartProducts.length
          ? (<p>Test</p>)
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
