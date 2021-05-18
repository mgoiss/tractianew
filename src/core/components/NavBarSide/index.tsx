import React from 'react'
import './styles.scss'
import { ReactComponent as LogoImage } from 'core/assets/images/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useHeaderUp } from '../NavBarUp/HeaderUpContext'

const NavBarSide = () => {
  const { nameCompany } = useHeaderUp();
  return (
    <div className="bg-primary main-nav">
      <div className="img-nav">
        <LogoImage />
      </div>
      <nav className="op-nav">
        <ul>
          <li>
            <NavLink to="/home" className="item-nav" onClick={() => nameCompany()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className="item-nav" onClick={() => nameCompany()}>
              Usuários
            </NavLink>
          </li>
          <li>
            <NavLink to="/assets" className="item-nav" onClick={() => nameCompany()}>
              Maquinario
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarSide;