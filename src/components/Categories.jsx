import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.getJSONCategories();
  }

  getJSONCategories = async () => {
    const categories = await getCategories();
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
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
              />
              {name}
            </label>))
        }

      </div>

    );
  }
}

export default Categories;
