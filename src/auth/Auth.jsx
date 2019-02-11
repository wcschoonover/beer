import { Component } from 'react';
import history from '../history/history';
import auth0 from 'auth0-js';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: 'testbeerapp.auth0.com',
    audience: 'https://testbeerapp.auth0.com/api/v2/',
    clientID: '2N4fn9sNvk5g1S3HdilX0yKxBxyMk8Xk',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token',
    scope: 'openid'
  });

  handleAuthentication() {
    this.auth0.parseHash((error, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (error) {
        history.replace('/');
        console.log(error);
      }
    });
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    history.replace('/home');
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    history.replace('/');
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
export default Auth;