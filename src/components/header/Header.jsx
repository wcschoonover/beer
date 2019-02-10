import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {' Beer App '}
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default Header;