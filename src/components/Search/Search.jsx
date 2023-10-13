import React, { useState } from 'react';

import './Search.scss';
import ButtonSearch from '../ButtonSearch/ButtonSearch';


function Search() {
  const [searchValue, setSearchValue] = useState('');


  return(
    <form className="search">
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
