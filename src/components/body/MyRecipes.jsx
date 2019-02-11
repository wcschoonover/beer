import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

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
              <Button variant="success" className="ml-auto" style={{marginTop:'-6px'}}>Add</Button>
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