
import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <Provider store={store} >
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    mockAllIsIntersecting(true);
    expect(asFragment()).toMatchSnapshot();
  });
}
);
