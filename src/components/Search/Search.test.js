import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import { MemoryRouter } from 'react-router';
import AppContext from '../../context/Context';


const mockAppContext = {
  setProducts: jest.fn(),
};

test('renders the search input field', () => {
  render(
    <MemoryRouter>
      <AppContext.Provider value={mockAppContext}>
        <Search />
      </AppContext.Provider>
    </MemoryRouter>
  );

  const searchText = 'Digite aqui';


  const inputElement = screen.getByPlaceholderText(searchText);
  expect(inputElement).toBeTruthy();
});
