import CardList from 'core/components/CardList';
import ModalBase from 'core/components/ModalBase';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  return (
    <section>
      <section className="graphic-container">
        <div>
          <h1>Status</h1>
          <div className="graphic-content">
          </div>
        </div>
        <div>
          <h1>Saúde</h1>
          <div className="graphic-content">
          </div>
        </div>
      </section>
      <section className="units-container">
        <div className="title">
          <h1>Unidades</h1>
          <ModalBase title="Nova Unidade">
            <div className="d-flex justify-content-between">
              <input name="name" type="text" className="form-control input-base" placeholder="Nome" />
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </ModalBase>
        </div>
        <div className="itens-grid ">
          <Link to={`home/${1}`}>
            <CardList name="Unidade Pombal" />
          </Link>
          <Link to={`home/${2}`}>
            <CardList name="Unidade Cicero Dantas" />
          </Link>
          <Link to={`home/${3}`}>
            <CardList name="Unidade Cipó" />
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Home;