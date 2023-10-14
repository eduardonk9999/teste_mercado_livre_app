import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

function Provider({ children }) {

  const [products, setProducts] = useState([]);

  const value = {
    products, 
    setProducts,
  };

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;
