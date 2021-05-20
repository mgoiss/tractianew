import './core/assets/styles/custom.scss';
import './App.scss';
import Routes from 'Routes';
import { HeaderContextProvide } from 'core/components/NavBarUp/HeaderUpContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <HeaderContextProvide>
        <Routes />
      </HeaderContextProvide>
      <ToastContainer />
    </>
  );
}

export default App;
