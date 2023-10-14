import React from 'react';

import logoMercadoLivre from '../../assets/Logo_ML.png';
import './Header.scss';
import Search from '../Search/Search';




function Header() {
  return(
    <header className="header">
      <div className="wrapper header--flex">
       
        <img src={logoMercadoLivre} alt="Logo Mercado Livre" />
       
        <Search />
      </div>
   
      
    </header>
  );
}

export default Header;
