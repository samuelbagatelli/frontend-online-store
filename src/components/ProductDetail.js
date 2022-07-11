import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const { productDetail } = this.props;
    const [title, thumbnail, price, attributes] = productDetail;
    return (
      <div data-testid="product-detail-name">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <h3>{ `R$ ${price}` }</h3>
        <div>
          { attributes.map(({ name, value_name: valueName, id }) => (
            <p key={ id }>{`${name}: ${valueName}`}</p>
          )) }
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  productDetail: PropTypes.arrayOf.isRequired,
};

export default ProductDetail;
