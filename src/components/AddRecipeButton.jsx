import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import history from '../history/history';

class AddRecipeButton extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    history.push(this.props.match.path + '/addrecipe');
  }

  render() {
    return(
      <Button variant="success" className={this.props.className} style={this.props.style} onClick={this.buttonClick}>Add</Button>
    );
  }
}
export default AddRecipeButton;