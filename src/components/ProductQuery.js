import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

class ProductsQuery extends React.Component {
  render() {
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
    );
  }
}

ProductsQuery.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setStateApp: PropTypes.func.isRequired,
  attributes: PropTypes.arrayOf.isRequired,
};

export default ProductsQuery;
