import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
import '../styles/Search.css';
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
    const { addToCart } = this.props;

    return (
      <div className="Search">
        <section className="Search_categories">
          <Categories
            setStateProductsFromCategory={ this.setStateProductsFromCategory }
          />
        </section>
        {/* coloquei o component aqui para renderizar e passar o teste.  */}
        <section className="Search_main">
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
          <section className="Search_products">
            { stateProductsQuery !== ''
              && stateProductsQuery
                .map(({ title, thumbnail, price, id }) => {
                  const quantity = 1;

                  return (<ProductsQuery
                    key={ id }
                    title={ title }
                    thumbnail={ thumbnail }
                    price={ price }
                    addToCart={
                      () => addToCart('', { title, thumbnail, price, quantity })
                    }
                  />);
                })}
          </section>
          { totalProducts === 0 && <p>Nenhum produto foi encontrado</p> }
        </section>
      </div>
    );
  }
}

Search.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Search;
