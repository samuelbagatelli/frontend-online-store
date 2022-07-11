import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
    };
  }

  render() {
    const { cartProducts } = this.state;
    const { productAddCart } = this.props;
    return (
      <div className="ShoppingCart">
        { cartProducts.length || productAddCart.length
          ? productAddCart.map(({ title, price }) => (
            <div key={ title }>
              <h3>{ title }</h3>
              <p>{ price }</p>
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
