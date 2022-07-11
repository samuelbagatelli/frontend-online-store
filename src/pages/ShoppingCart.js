import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;

    return (
      <div className="ShoppingCart">
        { cartItems.length
          ? (
            <div>
              {
                cartItems.map(({ title, thumbnail, price, quantity }, idx) => (
                  <CartItem
                    key={ idx }
                    idx={ idx }
                    title={ title }
                    thumbnail={ thumbnail }
                    price={ price }
                    quantity={ quantity }
                  />
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
};

export default ShoppingCart;
