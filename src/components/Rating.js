import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      email: '',
      checkbox: 0,
      textarea: '',
    };
  }

  handleInput = ({ target: { value, type } }, idProduct, index) => {
    const newValue = type === 'checkbox' ? index + 1 : value;
    this.setState({
      id: idProduct,
      [type]: newValue,
    });
  }

  confirmEmail = () => {
    const { email } = this.state;
    const { handleProductRating } = this.props;

    if (email !== '') {
      handleProductRating(this.state);
    }
  }

  render() {
    const { checkbox } = this.state;
    const STARS_RATING = ['nota1', 'nota2', 'nota3', 'nota4', 'nota5'];
    const { productRating, id } = this.props;

    // const filterRatingProductId = productRating !== []
    // && productRating.filter(({ id: productId }) => productId === id);

    return (
      <div>
        <input
          data-testid="product-detail-email"
          type="email"
          placeholder="Digite seu email"
          onChange={ (event) => this.handleInput(event, id) }
        />
        <section>
          { STARS_RATING.map((value, index) => (
            <input
              data-testid={ `${index + 1}-rating` }
              key={ index }
              type="checkbox"
              checked={ index < checkbox }
              onChange={ (event) => this.handleInput(event, id, index) }
            />
          )) }
        </section>
        <div>
          <textarea
            data-testid="product-detail-evaluation"
            type="textarea"
            onChange={ (event) => this.handleInput(event, id) }
          />
        </div>
        <div>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.confirmEmail }
          >
            Enviar Avaliação
          </button>
        </div>

        <h3>Avaliações</h3>
        {productRating.map(({ email, checkbox: checkboxRating, textarea }) => (
          <div key={ email }>
            {email}
            <section>
              { STARS_RATING.map((value, index) => (
                <input
                  key={ index }
                  type="checkbox"
                  checked={ index < checkboxRating }
                />
              )) }
            </section>
            <p>{textarea}</p>
          </div>
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  handleProductRating: PropTypes.func.isRequired,
  productRating: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
};

export default Rating;
