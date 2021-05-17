import CardList from 'core/components/CardList';
import "./styles.scss";

const User = () => {
  return (
    <section>
      <div className="title">
        <h1>Usuários</h1>
        <button type="button" className="btn btn-primary">Adicionar</button>
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