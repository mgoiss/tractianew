import CardListAssets from 'core/components/CardListAssets'
import CardListAssetsLoader from 'core/components/CardListAssets/Loader/CardListAssetsLoader';
import ModalAssets from 'core/components/ModalAssets';
import ModalBase from 'core/components/ModalBase';
import { Assets } from 'core/types/Assets';
import { makeResquet } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AssetsScreen = () => {

  const [assetsResponse, setAssetsResponse] = useState<Assets[]>()
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    makeResquet({ url: `/assets`, })
      .then(response => {
        setAssetsResponse(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [])

  return (
    <section>
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
  );
}

export default AssetsScreen;