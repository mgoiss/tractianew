import CardList from 'core/components/CardList';
import ModalBase from 'core/components/ModalBase';
import "./styles.scss";

const User = () => {
  return (
    <section>
      <div className="title">
        <h1>Usuários</h1>
        <ModalBase title="Novo Usuário">
          <div className="line-info-modal">
            <input name="name" type="text" className="form-control input-base" placeholder="Nome" />
            <input name="email" type="text" className="form-control input-base" placeholder="Email" />
          </div>
          <div className="line-info-modal ">
            <input name="unidade" type="text" className="form-control input-base" placeholder="Unidade" />
            <button type="button" className="btn btn-primary">Salvar</button>
          </div>
        </ModalBase>
      </div>
      <div className="itens-grid">
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
        <CardList name="Matheus" />
        <CardList name="Querem" />
        <CardList name="Potoca" />
      </div>
    </section>
  );
}

export default User;