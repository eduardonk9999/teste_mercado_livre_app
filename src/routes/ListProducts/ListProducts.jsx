import React from 'react';
import Product from '../../components/Products/Products';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router';

React;

function ListProduct() {
  const { product } = useParams();
  return(
    <div>
      <Header />
      <Product product={product} />
    </div>
  );
}

export default ListProduct;
