import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header>
        <nav className='menu-itens'>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Finder">Finder</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
          </ul>
        </nav>
    </header>    
  );
}

export default Header;
