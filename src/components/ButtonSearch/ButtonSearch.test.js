import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonSearch from './ButtonSearch';

test('renders the search button with alt text', () => {
  render(<ButtonSearch />);

  // Verifique se o botão de pesquisa está presente no componente ButtonSearch
  const searchButton = screen.getByRole('button', { name: 'Icon Button Search, Busca' });

  expect(searchButton).toBeTruthy();
});
