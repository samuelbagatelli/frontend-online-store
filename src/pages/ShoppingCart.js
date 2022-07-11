import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cartItems, quantity } = this.props;

    return (
      <div className="ShoppingCart">
        { cartItems.length
          ? (
            <div>
              {
                cartItems.map(({ title, thumbnail, price }, idx) => (
                  <div key={ idx }>
                    <h3 data-testid="shopping-cart-product-name">{title}</h3>
                    <img src={ thumbnail } alt={ title } />
                    <h3>{ `R$ ${price}` }</h3>
                    <p data-testid="shopping-cart-product-quantity">
                      Quantidade:
                      { quantity }
                    </p>
                  </div>
                ))
              }
            </div>
          )
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default ShoppingCart;
