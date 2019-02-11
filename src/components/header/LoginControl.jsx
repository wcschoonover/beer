import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state={
      authenticated: this.props.auth.isAuthenticated()
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.auth.isAuthenticated !== prevState.authenticated) {
      return { authenticated: nextProps.auth.isAuthenticated()};
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.authenticated !== this.state.authenticated) {
      this.setState({authenticated: this.props.auth.isAuthenticated()});
    }
  }

  render(){
    let button;

    if (!this.state.authenticated) {
      button = <Button variant="light" onClick={this.login}>Sign In</Button>
    }
    else {
      button = <Button variant="light" onClick={this.logout}>Logout</Button>
    }

    return(
      <div>
        {button}
      </div>
    );
  }
}
export default LoginControl;