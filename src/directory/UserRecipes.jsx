import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddRecipeButton from '../components/AddRecipeButton';

class UserRecipes extends Component {
  constructor(props) {
    super(props);
    this.state={
      recipes: []
    }
  }
  render() {
    return(
      <div>
        <Row>
          <Col xs={6}>
            <h1>My Saved Recipes</h1>
          </Col>
          <Col xs={6}>
            <AddRecipeButton style={{ marginTop: '6px', float: 'right' }} {...this.props}/>
          </Col>
        </Row>
        <ListGroup>
          {this.state.recipes.map((value, index) => {
            return (<ListGroup.Item key={index}>{value}</ListGroup.Item>);
          })}
        </ListGroup>
      </div>
    );
  }
}
export default UserRecipes;