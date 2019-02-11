import React from 'react';
import ReactDOM from 'react-dom';
import LoginControl from './LoginControl';

jest.mock('./LoginControl', () => 'LoginControl');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginControl />, div);
  ReactDOM.unmountComponentAtNode(div);
});