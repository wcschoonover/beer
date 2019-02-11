import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const isRoot = this.props.location.pathname === '/';

    return (
      <div className="App">
        {
          !isAuthenticated() && isRoot && (
            <Redirect to={{ pathname: '/home', state: { from: this.props.location } }} />
          )
        }
        {
          isAuthenticated() && isRoot && (
            <Redirect to={{ pathname: `/home`, state: { from: this.props.location } }} />
          )
        }
      </div>
    );
  }
}

export default App;
