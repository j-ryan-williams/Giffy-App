import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        searchText: ""
      };
    }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
  }

  render() {
    return(
      <div>
        <form className="search-box" onSubmit={ this.handleSubmit }>
          <label className="hidden"></label>
          <input type="search"
                 onChange={ this.onSearchChange }
                 name="search"
                 ref={ (input) => this.query = input}
                 placeholder="Search..." />
          <button type="submit" id="submit" className="search-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
