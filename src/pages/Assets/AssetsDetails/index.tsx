import './styles.scss'

const AssetsDetails = () => {
  return (
    <section>
      <section className="info-assets">
        <div className="info-assets-img-status">
          <div className="info-assets-status bg-primary"></div>
          <img
            src="https://tractian-img.s3.amazonaws.com/6d5028682016cb43d02b857d4f1384ae.jpeg"
            alt="Foto Maquina"
          />
        </div>
        <div className="info-assets-date">
          <div className="d-flex justify-content-between mb-3">
            <h1>Motor H13D-1</h1>
            <h2><strong>Unidade Pombal</strong></h2>
          </div>
          <div className="d-flex justify-content-between">
            <h2><strong>Modelo: </strong>Motor</h2>
            <h2><strong>Saúde: </strong>70%</h2>
          </div>
          <div className="d-flex justify-content-between">
            <h2><strong>Sensor: </strong>GSJ1535</h2>
            <h2><strong>Status: </strong>Em Operação</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="especi-assets">
          <h1>Especificações</h1>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="info-iten-content">
              <h2><strong className="mr-2">Temp. Maxima: </strong>70°C</h2>
            </div>
            <div className="info-iten-content">
              <h2><strong className="mr-2">Potência em kWh: </strong>1.5</h2>
            </div>
            <div className="info-iten-content">
              <h2><strong className="mr-2">RPM: </strong>70</h2>
            </div>
          </div>
        </div>
        <div className="especi-assets mt-5">
          <h1>Métricas</h1>
          <div className="d-flex justify-content-around flex-wrap">
            <div className="info-iten-content">
              <h2><strong className="mr-2">Ultima Coleta: </strong>05/05/2021</h2>
            </div>
            <div className="info-iten-content">
              <h2><strong className="mr-2">Total Coleta: </strong>1000</h2>
            </div>
            <div className="info-iten-content">
              <h2><strong className="mr-2">Total de Horas de Coletas: </strong>1000</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default AssetsDetails;