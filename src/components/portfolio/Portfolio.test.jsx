import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './Portfolio';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import store from '../../store';

test('renders NavBar in the DOM', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    </Provider>
  );
  mockAllIsIntersecting(true);
  const navBar = screen.getByTestId('nav-bar');

  expect(navBar).toBeInTheDocument();
});
