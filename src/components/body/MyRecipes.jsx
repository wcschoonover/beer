import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MyRecipes extends Component {
  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            My Recipes <Button variant="success" style={{float:"right", marginTop:"-6px"}}>Add</Button>
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default MyRecipes;