import { useEffect } from 'react';
import { useHeaderUp } from './HeaderUpContext';
import './styles.scss'

const NavBarUp = () => {
  const { headerUp, NameCompany } = useHeaderUp();

  useEffect(() => {
    NameCompany();
  }, [])

  return (
    <nav className="up-nav">
      <h1>{headerUp}</h1>
      <h3>Qui, 8 Abril</h3>
    </nav>
  );
}

export default NavBarUp;