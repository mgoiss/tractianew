type Prop = {
  name: string,
}

const CardList = ({ name }: Prop) => (
  <div className="card-list-base">
    <h2>{name}</h2>
  </div>
);

export default CardList;