import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults';

jest.mock('./SearchResults', () => 'SearchResults');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResults />, div);
  ReactDOM.unmountComponentAtNode(div);
});