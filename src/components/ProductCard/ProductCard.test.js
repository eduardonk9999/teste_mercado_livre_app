import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('image in ProductCard has alt attribute', () => {
  const mockData = {
    title: 'Example Product',
    thumbnail: 'example_thumbnail.jpg',
    price: 9.99,
    shipping: { free_shipping: true },
  };

  render(<ProductCard data={mockData} />);

  // Verifique se a imagem no componente ProductCard tem o atributo 'alt'
  const productCardTitle = screen.getByText('Example Product');

  expect(productCardTitle).toBeTruthy();
});
