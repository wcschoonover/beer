import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trending from './Trending';

class Body extends Component {
  render() {
    return(
      <Row>
        <Col xs={8}>
          <Trending />
        </Col>
        <Col xs={4}>
        </Col>
      </Row>
    );
  }
}
export default Body;