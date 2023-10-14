import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Search.scss';
import ButtonSearch from '../ButtonSearch/ButtonSearch';
import AppContext from '../../context/Context';
import fetchProducts from '../../server/products';


function Search() {
  const [searchValue, setSearchValue] = useState('');
  let navigate = useNavigate();

  const { setProducts } = useContext(AppContext);

  const heandleSearchProduct = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    {console.log(products);}

    setSearchValue('');
    navigate('/ProductsList');
    setProducts(products);
  };


  return(
    <form className="search" onSubmit={heandleSearchProduct}>
      <input 
        type="text"
        value={searchValue} 
        id="campo" 
        name="campo" 
        placeholder="Digite aqui" 

        onChange={({target}) => {
          setSearchValue(target.value);
        }}
      
      />

  
      <ButtonSearch />
    </form>
  );
}

export default Search;
