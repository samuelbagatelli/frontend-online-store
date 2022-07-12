import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      checkbox: 0,
      textarea: '',
    };
  }

  handleInput = ({ target: { value, type } }, index) => {
    // console.log(value, type, index);
    const newValue = type === 'checkbox' ? index + 1 : value;
    this.setState({
      [type]: newValue,
    });
  }

  render() {
    const { checkbox } = this.state;
    const STARS_RATING = ['nota1', 'nota2', 'nota3', 'nota4', 'nota5'];
    const { handleProductRating } = this.props;
    return (
      <div>
        <input
          data-testid="product-detail-email"
          type="email"
          placeholder="Digite seu email"
          onChange={ this.handleInput }
        />
        <section>
          { STARS_RATING.map((value, index) => (
            <input
              data-testid={ `${index}-rating` }
              key={ index }
              type="checkbox"
              checked={ index < checkbox }
              onChange={ (event) => this.handleInput(event, index) }
            />
          )) }
        </section>
        <div>
          <textarea
            data-testid="product-detail-evaluation"
            type="textarea"
            onChange={ this.handleInput }
          />
        </div>
        <div>
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ () => handleProductRating(this.state) }
          >
            Enviar Avaliação
          </button>
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  handleProductRating: PropTypes.func.isRequired,
};

export default Rating;
