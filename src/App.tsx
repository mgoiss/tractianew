import React from 'react';
import './core/assets/styles/custom.scss';
import './App.scss';
import NavBarSide from 'core/components/NavBarSide';
import NavBarUp from 'core/components/NavBarUp';

const App = () => {
  return (
    <div className="d-flex">
      <NavBarSide />
      <section className="content">
        <NavBarUp />
        <h1>Aqui entra as Rotas</h1>
      </section>
    </div>
  );
}

export default App;
