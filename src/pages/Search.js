import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

import ProductsQuery from '../components/ProductQuery';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      stateProductsQuery: '',
      totalProducts: '',
    };
  }

  handleInput = (event) => {
    const { value } = event.target;

    this.setState({ inputValue: value });
  }

  setStateProductsFromQuery = async () => {
    const { inputValue } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', inputValue);

    const productsQuery = results.map(({ title, thumbnail, price, id }) => ({
      title,
      thumbnail,
      price,
      id,
    }));

    this.setState({
      stateProductsQuery: productsQuery,
      totalProducts: productsQuery.length,
    });
  }

  setStateProductsFromCategory = ({ results }) => {
    this.setState({
      stateProductsQuery: results,
      totalProducts: results.length,
    });
  }

  render() {
    const { inputValue, stateProductsQuery, totalProducts } = this.state;

    return (
      <div>
        <Categories setStateProductsFromCategory={ this.setStateProductsFromCategory } />
        {/* coloquei o component aqui para renderizar e passar o teste.  */}
        <input
          data-testid="query-input"
          onChange={ this.handleInput }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.setStateProductsFromQuery }
        >
          Pesquisar
        </button>
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
        { stateProductsQuery !== ''
          && stateProductsQuery
            .map(({ title, thumbnail, price, id }) => (<ProductsQuery
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />)) }
        { totalProducts === 0 && <p>Nenhum produto foi encontrado</p> }
      </div>
    );
  }
}

export default Search;
