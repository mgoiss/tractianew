import CardListAssets from 'core/components/CardListAssets';
import { useHeaderUp } from 'core/components/NavBarUp/HeaderUpContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';

const Units = () => {
  const { setName } = useHeaderUp();

  useEffect(() => {
    setName("Unidade");
  })

  return (
    <section>
      <section className="graphic-container">
        <div>
          <h1>Modelo</h1>
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
          <h1>Maquinas</h1>
          <button type="button" className="btn btn-primary">Adicionar</button>
        </div>
        <div className="itens-grid">
          <Link to={`/assets/${1}`}>
            <CardListAssets
              name="Motor H13D-1"
              model="Motor"
              img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
            />
          </Link>
          <CardListAssets
            name="Motor H13D-1"
            model="Motor"
            img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
          />
          <CardListAssets
            name="Motor H13D-1"
            model="Motor"
            img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
          />
          <CardListAssets
            name="Motor H13D-1"
            model="Motor"
            img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
          />
        </div>
      </section>
    </section>
  );
}

export default Units;