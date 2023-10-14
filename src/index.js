import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/main.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import ListProducts from './routes/ListProducts/ListProducts';
import Product from './routes/Product/Product';

import Provider from './context/Provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'product/:id',
    element: <Product />,
  },
  {
    path: 'listproducts/:product',
    element: <ListProducts />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
