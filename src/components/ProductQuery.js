import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ProductsQuery extends React.Component {
  render() {
<<<<<<< HEAD
    const { addToCart } = this.props;

    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ `R$ ${price}` }</h3>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
=======
    const { title, thumbnail, price, attributes, id, setStateApp } = this.props;
    return (
      <Link
        data-testid="product-detail-link"
        to="/product-detail"
        onClick={ () => setStateApp(title, thumbnail, price, attributes, id) }
      >
        <div
          data-testid="product"
        >
          <h3>{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <h3>{ `R$ ${price}` }</h3>
        </div>
      </Link>
>>>>>>> 4f372497963169f8fb966fdde27c67ff15ee4602
    );
  }
}

ProductsQuery.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
<<<<<<< HEAD
  addToCart: PropTypes.func.isRequired,
=======
  setStateApp: PropTypes.func.isRequired,
  attributes: PropTypes.arrayOf.isRequired,
>>>>>>> 4f372497963169f8fb966fdde27c67ff15ee4602
};

export default ProductsQuery;
