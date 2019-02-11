import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trending from './Trending';
import MyRecipes from './MyRecipes';

class Body extends Component {
  render() {
    let layout;
    if (this.props.auth.isAuthenticated()) {
      layout = 
      <Row>
        <Col xs={8}>
          <Trending />
        </Col>
        <Col xs={4}>
          <MyRecipes />
        </Col>
      </Row>
    }
    else {
      layout =
        <Row>
          <Col xs={12}>
            <Trending />
          </Col>
        </Row>
    }
    return(
      <div>
        {layout}
      </div>
    );
  }
}
export default Body;