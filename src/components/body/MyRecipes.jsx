import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import AddRecipeButton from '../AddRecipeButton';

class MyRecipes extends Component {
  constructor(props) {
    super(props);
    this.state={
      recipes: []
    }
  }

  componentDidMount() {
    this.setState({
      recipes: []
    });
  }

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/home/myrecipes">My Recipes</Nav.Link>
              </Nav.Item>
              <AddRecipeButton className="ml-auto" style={{ marginTop: '-6px' }} {...this.props}/>
            </Nav>
          </Card.Title>
          <ListGroup>
            {this.state.recipes.map((value, index) => {
              return (<ListGroup.Item key={index}>{value}</ListGroup.Item>);
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
export default MyRecipes;