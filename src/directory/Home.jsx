import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/header/Header';
import SearchBar from '../components/SearchBar';
import Main from './Main';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      query: e.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header { ...this.props }/>
        <br />
        <Container>
          <Row>
            <Col xs={12}>
              <SearchBar onChange={this.handleInputChange} query={this.state.query} {...this.props}/>
            </Col>
          </Row>
          <br />
          <Main query={this.state.query} {...this.props}/>
        </Container>
      </div>
    );
  }
}
export default Home;