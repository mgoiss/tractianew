import CardListAssets from 'core/components/CardListAssets';
import CardListAssetsLoader from 'core/components/CardListAssets/Loader/CardListAssetsLoader';
import ModalAssets from 'core/components/ModalAssets';
import ModalBase from 'core/components/ModalBase';
import { useHeaderUp } from 'core/components/NavBarUp/HeaderUpContext';
import { Assets } from 'core/types/Assets';
import { Unit } from 'core/types/unit';
import { makeResquet } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.scss';

type ParamsType = {
  unitsId: string;
}

const Units = () => {
  const { setName } = useHeaderUp();
  const [unitResponse, setUnitResponse] = useState<Unit>();
  const [assetsResponse, setAssetsResponse] = useState<Assets[]>()
  const [isLoader, setIsLoader] = useState(false);
  const { unitsId } = useParams<ParamsType>();

  useEffect(() => {
    setIsLoader(true);
    makeResquet({ url: `/units/${unitsId}` })
      .then(response => {
        setUnitResponse(response.data);
      })

    const params = {
      unitId: unitsId
    }

    makeResquet({ url: `/assets`, params })
      .then(response => {
        setAssetsResponse(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [unitsId])

  useEffect(() => {
    setName(unitResponse?.name);
  }, [unitResponse, setName])

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
          <ModalBase title="Nova Maquina">
            <ModalAssets />
          </ModalBase>
        </div>
        <div className="itens-grid">
          {isLoader ? <CardListAssetsLoader /> : (
            assetsResponse?.map(assets => (
              <Link to={`/assets/${assets.id}`} key={assets.id}>
                <CardListAssets
                  name={assets.name}
                  model={assets.model}
                  img={assets.image}
                />
              </Link>
            ))
          )}

        </div>
      </section>
    </section>
  );
}

export default Units;