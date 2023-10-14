import React from 'react';

import logoMercadoLivre from '../../assets/Logo_ML.png';
import './Header.scss';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';





function Header() {
  return(
    
    <header className="header">
      <div className="wrapper header--flex">
        <Link to="/">
          <img src={logoMercadoLivre} alt="Logo Mercado Livre" />
        </Link>
     
        <Search />
      
      </div>
   
      
    </header>
  
  );
}

export default Header;
