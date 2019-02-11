import React, { Component } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      ingredients:[],
      instructions: "",
      ingredientName: "",
      amount: ""
    }
    this.addClick = this.addClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
  }

  addClick() {
    let arr = this.state.ingredients;
    arr.push({
      ingredientName: this.state.ingredientName,
      amount: this.state.amount
    });
    this.setState({
      ingredients: arr,
      ingredientName: "",
      amount: ""
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleIngredientChange(e) {
    this.setState({
      ingredientName: e.target.value
    });
  }

  handleAmountChange(e) {
    this.setState({
      amount: e.target.value
    });
  }

  handleInstructionsChange(e) {
    this.setState({
      instructions: e.target.value
    });
  }

  render() {
    return(
      <div>
        <h2>Add New Recipe</h2>
        <FormControl size="lg" type="text" placeholder="Recipe Name" value={this.state.name} onChange={this.handleNameChange}/>
        <br />
        <ListGroup>
          {this.state.ingredients.map((value, index) => {
            return(
              <ListGroup.Item key={index}>
                {value.ingredientName}, {value.amount}
                <Button variant="danger" style={{float:'right', marginLeft:'6px'}}>Delete</Button>
                <Button variant="secondary" style={{float:'right'}}>Edit</Button>
              </ListGroup.Item>
            );
          })}
          <ListGroup.Item>
            <Row>
              <Col>
                <FormControl type="text" placeholder="Find Ingredient" value={this.state.ingredientName} onChange={this.handleIngredientChange}/>
              </Col>
              <Col>
                <FormControl type="text" placeholder="Amount" value={this.state.amount} onChange={this.handleAmountChange}/>
              </Col>
              <Col>
                <Button style={{float:'right'}} onClick={this.addClick}>Add</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Instructions</h4>
        <FormControl as="textarea" rows="10" placeholder="Add instructions..." value={this.state.instructions} onChange={this.handleInstructionsChange}/>
        <br />
        <Button variant="success" style={{ float: 'right', marginLeft: '5px' }}>Save</Button>
        <Button variant="light" style={{ float:'right' }}>Cancel</Button>
      </div>
    );
  }
}
export default AddRecipe;