import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { idx, title, thumbnail, price, quantity } = this.props;

    return (
      <div key={ idx }>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ `R$ ${price}` }</h3>
        <button
          type="button"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { quantity }
        </p>
        <button
          type="button"
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  idx: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
