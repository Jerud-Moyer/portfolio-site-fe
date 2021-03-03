import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { getFacts } from '../../services/portfolio-api';
import FactList from './FactList';


jest.mock('../../services/portfolio-api.js');

describe('factlist component', () => {
  it('displays a list of facts', async() => {
    getFacts.mockResolvedValue([
      { id: 1, text: 'stuff about me', colorCode: 'blue' }

    ]);
    render(
      <Provider>
        <FactList />
      </Provider>
    );

    const factList = await screen.getByTestId('facts');

    return waitFor(() => {
      expect(factList).notToBeEmptyDOMElement();
    });
  });
});
