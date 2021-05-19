import CardListAssets from 'core/components/CardListAssets'
import ModalBase from 'core/components/ModalBase';
import './styles.scss'

const Assets = () => {
  return (
    <section>
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
          <div className="line-info-modal ">
            <div>
              <button type="button" className="btn btn-secondary mb-2">Adicionar Imagem</button>
              <h4>As imagens devem ser  JPG ou PNG<br />e não devem ultrapassar <strong>5 mb.</strong></h4>
            </div>
            <button type="button" className="btn btn-primary align-self-end">Salvar</button>
          </div>
        </ModalBase>
      </div>
      <div className="itens-grid">
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
        <CardListAssets
          name="Motor H13D-1"
          model="Motor"
          img="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
        />
      </div>
    </section>
  );
}

export default Assets;