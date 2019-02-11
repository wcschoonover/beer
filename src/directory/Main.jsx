import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SearchResults from './SearchResults';
import Body from '../components/body/Body';


class Main extends Component {
  render() {
    return(
      <div className='main'>
        <Switch>
          <Route exact path={this.props.match.path} render={() => <Body {...this.props}/>} />
          <Route path={this.props.match.path + '/search'} render={() => <SearchResults {...this.props} />} />
        </Switch>
      </div>
    );
  }
}
export default Main;