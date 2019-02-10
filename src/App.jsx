import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Container>
          <Row>
            <Col xs={12}>
              <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
            </Col>
            <Col xs={4}>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
