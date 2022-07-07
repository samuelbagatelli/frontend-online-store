import React from 'react';
import Categories from '../components/Categories';

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
      </div>
    );
  }
}

export default Search;
