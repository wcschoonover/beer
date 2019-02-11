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
        <Col xs={12} sm={6} md={6} lg={8}>
          <Trending />
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <MyRecipes {...this.props}/>
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