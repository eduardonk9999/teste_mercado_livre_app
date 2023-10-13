import React from 'react';
import buttonIcon from '../../assets/ic_Search.png';
import './Search.scss';


function Search() {
  return(
    <form className="search">
      <input type="text" id="campo" name="campo" placeholder="Digite aqui" />
      <button>
        
        <img src={buttonIcon} alt="Icon Button Search, Busca" />
      
      </button>
    </form>
  );
}

export default Search;
