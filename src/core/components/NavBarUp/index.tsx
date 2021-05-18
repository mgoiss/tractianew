import { useHeaderUp } from './HeaderUpContext';
import './styles.scss'

const NavBarUp = () => {
  const { headerUp } = useHeaderUp();

  return (
    <nav className="up-nav">
      <h1>{headerUp}</h1>
      <h3>Qui, 8 Abril</h3>
    </nav>
  );
}

export default NavBarUp;