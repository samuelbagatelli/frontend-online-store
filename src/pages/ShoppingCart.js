import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { productAddCart, setStateCart, decrease } = this.props;
    return (
      <div className="ShoppingCart">
        { productAddCart.length
          ? productAddCart.map(({ id, title, totalPrice, quantity }) => (
            <div key={ title }>
              <h3
                data-testid="shopping-cart-product-name"
              >
                { title }
              </h3>
              <p>{ `R$${totalPrice}` }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => decrease(id, title, totalPrice, quantity) }
              >
                -
              </button>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { quantity }
              </p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => setStateCart(id, title, totalPrice, quantity) }
              >
                +
              </button>
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
  setStateCart: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default ShoppingCart;
