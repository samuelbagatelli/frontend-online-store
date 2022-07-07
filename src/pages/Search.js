import React from 'react';
<<<<<<< Updated upstream
import Categories from '../components/Categories';
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
    };
  }

  handleInput = (event) => {
    const { value } = event.target;

    this.setState({ inputValue: value });
  }

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <Categories />
        {/* coloquei o component aqui para renderizar e passar o teste.  */}
        <input
          onChange={ this.handleInput }
        />
        { inputValue
          ? <p>testeTru</p>
          : (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}

        <button type="button">
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
      </div>
    );
  }
}

export default Search;
