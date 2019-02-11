import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this.setState({
      results: []
    });
  }

  render() {
    return(
      <div>
        Search Results
        <ListGroup>
          {this.state.results.map((value, index) => {
            return(<ListGroup.Item key={index}>{value}</ListGroup.Item>);
          })}
        </ListGroup>
      </div>
    );
  }
}
export default SearchResults;