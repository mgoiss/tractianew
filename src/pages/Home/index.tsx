import CardList from 'core/components/CardList';
import CardListLoader from 'core/components/CardList/Loader/CardListLoader';
import ModalBase from 'core/components/ModalBase';
import { Unit } from 'core/types/unit';
import { makeResquet } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles.scss';

type FormUnit = {
  name: string;
  companyId: number;
}

const Home = () => {
  document.title = "TRACTIANEW | HOME"

  const [unitResponse, setUnitResponse] = useState<Unit[]>();
  const [isLoader, setIsLoader] = useState(false);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormUnit>();

  useEffect(() => {
    setIsLoader(true);
    makeResquet({ url: '/units' })
      .then(response => setUnitResponse(response.data))
      .finally(() => {
        setIsLoader(false);
      })
  }, [])

  const onSubmitModal = (data: FormUnit) => {
    data.companyId = 1;
    makeResquet({ url: '/units', method: 'POST', data })
      .then(() => {
        toast.success('Unidade cadastrada com sucesso!', {
          style: { background: '#0353F3' },
          position: 'bottom-right'
        })
      })
      .catch(() => {
        toast.error('Erro ao salvar Unidade!', { position: 'bottom-right' })
      })
      .finally(() => {
        setValue('name', '');
      })
  }

  return (
    <section>
      <section className="graphic-container">
        <div>
          <h1>Status</h1>
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
          <h1>Unidades</h1>
          <ModalBase title="Nova Unidade">
            <form onSubmit={handleSubmit(onSubmitModal)} >
              <div className="d-flex flex-column">
                <input
                  type="text"
                  className={`form-control input-base ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Nome"
                  {...register("name", {
                    required: "Campo Obrigatório",
                    minLength: { value: 3, message: 'O campo deve ter no mínimo 3 caracteres' },
                  })}
                />
                {errors.name && (
                  <div className="invalid-feedback d-block">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <button className="btn btn-primary">Salvar</button>
            </form>
          </ModalBase>
        </div>
        <div className="itens-grid ">
          {isLoader ? <CardListLoader /> : (
            unitResponse?.map(unit => (
              <Link to={`home/${unit.id}`} key={unit.id}>
                <CardList name={unit.name} />
              </Link>
            ))
          )}
        </div>
      </section>
    </section>
  );
}

export default Home;