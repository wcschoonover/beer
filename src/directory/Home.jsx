import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/Header';
import SearchBar from '../components/SearchBar';
import Body from '../components/body/Body';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header { ...this.props }/>
        <br />
        <Container>
          <Row>
            <Col xs={12}>
              <SearchBar />
            </Col>
          </Row>
          <br />
          <Body />
        </Container>
      </div>
    );
  }
}
export default Home;