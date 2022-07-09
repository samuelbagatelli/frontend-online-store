import React from 'react';
import PropTypes from 'prop-types';

class ProductsQuery extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ `R$ ${price}` }</h3>
      </div>
    );
  }
}

ProductsQuery.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsQuery;
