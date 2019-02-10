import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './components/SearchBar';
import Header from './components/header/Header';
import Body from './components/body/Body';

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
          <Body />
        </Container>
      </div>
    );
  }
}

export default App;
