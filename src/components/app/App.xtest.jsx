import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Provider>
      <App />
    </Provider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
