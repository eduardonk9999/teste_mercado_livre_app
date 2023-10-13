import React from 'react';

import logoMercadoLivre from '../../assets/Logo_ML.png';
import './Header.scss';



function Header() {
  return(
    <header className="header">
      <h1>
        <img src={logoMercadoLivre} alt="Logo Mercado Livre" />
      </h1>
      <form>
        <label>info do produto</label>
        <input type="text" id="campo" name="campo" placeholder="Digite aqui" />
      </form>
    </header>
  );
}

export default Header;
