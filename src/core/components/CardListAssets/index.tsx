import './styles.scss';

type Prop = {
  name: string,
  img: string,
  model: string
}

const CardListAssets = ({ name, img, model }: Prop) => (
  <section className="card-list-base card-list-assets">
    <img src={img} alt="Foto Maquina" />
    <div className="assets-info">
      <h2 className="title-name">{name}</h2>
      <h2>{model}</h2>
    </div>
  </section>
)

export default CardListAssets;