import React from 'react'
import './styles.scss'
import { ReactComponent as LogoImage } from 'core/assets/images/Logo.svg'

const NavBarSide = () => {
  return (
    <div className="bg-primary main-nav">
      <div className="img-nav">
        <LogoImage />
      </div>
      <nav className="op-nav">
        <ul>
          <li>
            Home
          </li>
          <li>
            Usuários
          </li>
          <li>
            Maquinario
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarSide;