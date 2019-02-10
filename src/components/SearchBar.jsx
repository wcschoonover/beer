import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class SearchBar extends Component {
  render() {
    return (
      <InputGroup>
        <FormControl size="lg" type="text" placeholder="Find Recipes" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
export default SearchBar;