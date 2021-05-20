import CardListAssets from 'core/components/CardListAssets';
import CardListAssetsLoader from 'core/components/CardListAssets/Loader/CardListAssetsLoader';
import ModalBase from 'core/components/ModalBase';
import { useHeaderUp } from 'core/components/NavBarUp/HeaderUpContext';
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
  const [isLoader, setIsLoader] = useState(false);
  const { unitsId } = useParams<ParamsType>();

  useEffect(() => {
    setIsLoader(true);
    makeResquet({ url: `/units/${unitsId}` })
      .then(response => {
        setUnitResponse(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      })
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
            <div className="line-info-modal">
              <input name="name" type="text" className="form-control input-base" placeholder="Nome" />
              <input name="modelo" type="text" className="form-control input-base" placeholder="Modelo" />
            </div>
            <div className="line-info-modal">
              <input name="unidade" type="text" className="form-control input-base" placeholder="Unidade" />
              <input name="sensor" type="text" className="form-control input-base" placeholder="Sensor" />
            </div>
            <div className="line-info-modal">
              <div>
                <button type="button" className="btn btn-secondary mb-2">Adicionar Imagem</button>
                <h4>As imagens devem ser  JPG ou PNG<br />e não devem ultrapassar <strong>5 mb.</strong></h4>
              </div>
              <button type="button" className="btn btn-primary align-self-end">Salvar</button>
            </div>
          </ModalBase>
        </div>
        <div className="itens-grid">
          {isLoader ? <CardListAssetsLoader /> : (
            <Link to={`/assets/${1}`}>
              <CardListAssets
                name="Motor H13D-1"
                model="Motor"
                img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
              />
            </Link>
          )}

        </div>
      </section>
    </section>
  );
}

export default Units;