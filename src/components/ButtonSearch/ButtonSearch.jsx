import React from 'react';
import buttonIcon from '../../assets/ic_Search.png';

import './ButtonSearch.scss';

function ButtonSearch() {
  return(
    <>
      <button type="submit" className="search__button">
        
        <img src={buttonIcon} alt="Icon Button Search, Busca" />
        
      </button>
    </>
  );
}

export default ButtonSearch;
