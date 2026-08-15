import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {}
    })
  )
}));

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});

