import './core/assets/styles/custom.scss';
import './App.scss';
import Routes from 'Routes';
import { HeaderContextProvide } from 'core/components/NavBarUp/HeaderUpContext';

const App = () => {
  return (
    <HeaderContextProvide>
      <Routes />
    </HeaderContextProvide>
  );
}

export default App;
