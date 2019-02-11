import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {' Beer App '}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button variant="light">Sign In</Button>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;