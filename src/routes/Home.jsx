import React from 'react';
import Provider from '../context/Provider';
import Header from '../components/Header/Header';


function Home() {
  return(
    <Provider>
      <Header />
  
    </Provider>
  );
}

export default Home;
