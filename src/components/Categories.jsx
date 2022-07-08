import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: '',
    };
  }

  componentDidMount() {
    this.getJSONCategories();
  }

  getJSONCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  handleChange = async (id) => {
    const getCategory = await getProductsFromCategoryAndQuery(id);
    return this.setState({ category: getCategory.results });
  }

  render() {
    const { categories, category } = this.state;
    return (
      <div>
        <h2>Categorias:</h2>
        {
          categories.map(({ name, id }) => (
            <label key={ id } htmlFor={ id }>
              <input
                type="radio"
                data-testid="category"
                id={ id }
                name="categories"
                onChange={ () => { this.handleChange(id); } }
              />
              {name}
            </label>
          ))
        }
        {
          category && category.map(({ title, price, thumbnail, id }) => (
            <div
              data-testid="product"
              key={ id }
            >
              <img src={ thumbnail } alt={ title } />
              <strong>{price}</strong>
              <h2>{title}</h2>
            </div>))
        }

      </div>

    );
  }
}

export default Categories;
