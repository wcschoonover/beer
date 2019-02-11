import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import history from '../history/history';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.sendQuery = this.sendQuery.bind(this);
  }

  sendQuery() {
    history.push(this.props.match.path + '/search');
  }

  render() {
    return (
      <InputGroup>
        <FormControl size="lg" type="text" placeholder="Find Recipes" value={this.props.query} onChange={this.props.onChange}/>
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.sendQuery}>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
export default SearchBar;