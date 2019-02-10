import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchBar extends Component {
  render() {
    return (
      <Form>
        <Form.Control size="lg" type="text" placeholder="Find Recipes" />
      </Form>
    );
  }
}
export default SearchBar;