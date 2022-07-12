import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { productAddCart } = this.props;
    return (
      <div className="ShoppingCart">
        { productAddCart.length
          ? productAddCart.map(({ title, totalPrice, quantity }) => (
            <div key={ title }>
              <h3
                data-testid="shopping-cart-product-name"
              >
                { title }
              </h3>
              <p>{ `R$${totalPrice}` }</p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { quantity }
              </p>
            </div>
          ))
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>
          )}
        <Link to="/">
          <button
            type="button"
          >
            Voltar para pagina inicial
          </button>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productAddCart: PropTypes.arrayOf.isRequired,
};

export default ShoppingCart;
