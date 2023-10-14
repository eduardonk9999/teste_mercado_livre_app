import React from 'react';
import Provider from '../context/Provider';
import Header from '../components/Header/Header';
import Product from '../components/Products/Products';

function Home() {
  return(
    <Provider>
      <Header />
      <Product />
    </Provider>
  );
}

export default Home;
