import React, { useContext, useState } from 'react';


import './Search.scss';
import ButtonSearch from '../ButtonSearch/ButtonSearch';
import AppContext from '../../context/Context';
import fetchProducts from '../../server/products';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const { setProducts } = useContext(AppContext);

  const heandleSearchProduct = async (event) => {
    event.preventDefault();
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setSearchValue('');
    navigate(`/listproducts/${searchValue}`);
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
