import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LoginControl from './LoginControl';

class Header extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {' Beer App '}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <LoginControl {...this.props}/>
        </Nav>
      </Navbar>
    );
  }
}
export default Header;