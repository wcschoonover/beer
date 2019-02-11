import React from 'react';
import ReactDOM from 'react-dom';
import MyRecipes from './MyRecipes';

jest.mock('./MyRecipes', () => 'MyRecipes');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyRecipes />, div);
  ReactDOM.unmountComponentAtNode(div);
});