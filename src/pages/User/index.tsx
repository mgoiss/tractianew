import CardList from 'core/components/CardList';
import CardListLoader from 'core/components/CardList/Loader/CardListLoader';
import ModalBase from 'core/components/ModalBase';
import { Unit } from 'core/types/unit';
import { User } from 'core/types/user';
import { makeResquet } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import "./styles.scss";

type FormUser = {
  name: string;
  email: string;
  unitId: number;
  companyId: number;
}

const UserScreen = () => {
  document.title = "TRACTIANEW | USUÁRIOS"

  const [userResponse, setUserResponse] = useState<User[]>();
  const [isLoader, setIsLoader] = useState(false);
  const [unit, setUnit] = useState<Unit[]>();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormUser>();

  useEffect(() => {
    makeResquet({ url: '/units' })
      .then(response => setUnit(response.data))
  }, [])

  useEffect(() => {
    setIsLoader(true)
    makeResquet({ url: '/users' })
      .then(response => setUserResponse(response.data))
      .finally(() => { setIsLoader(false) })
  }, [])

  const OnSubmitModal = (data: FormUser) => {
    data.companyId = 1;
    makeResquet({ url: '/users', method: 'POST', data })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso!", {
          style: { background: '#0353f3' },
          position: 'bottom-right'
        })
      })
      .catch(() => {
        toast.error('Erro ao salvar Usuário!', { position: 'bottom-right' })
      })
      .finally(() => {
        setValue('name', '');
        setValue('email', '');
      })
  }

  return (
    <section>
      <div className="title">
        <h1>Usuários</h1>
        <ModalBase title="Novo Usuário">
          <form onSubmit={handleSubmit(OnSubmitModal)} className="form-modal">
            <div className="line-info-modal ">
              <div className="d-flex flex-column">
                <input
                  type="text"
                  className={`form-control input-base ${errors.name ? 'is-invalid' : 'mb-4'}`}
                  placeholder="Nome"
                  {...register("name", {
                    required: "Campo Obrigatório",
                    minLength: { value: 3, message: 'O campo deve ter no mínimo 3 caracteres' },
                  })}
                />
                {errors.name && (
                  <div className="invalid-feedback d-block mb-4">
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column">
                <input
                  type="email"
                  className={`form-control input-base ${errors.email ? 'is-invalid' : 'mb-4'}`}
                  placeholder="Email"
                  {...register("email", {
                    required: "Campo Obrigatório",
                    minLength: { value: 3, message: 'O campo deve ter no mínimo 3 caracteres' }
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback d-block mb-4">
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>
            <div className="line-info-modal ">
              <div className="d-flex flex-column">
                <select
                  required={true}
                  className={`input-base custom-select select-base ${errors.unitId ? 'is-invalid' : 'mb-4'}`}
                  {...register("unitId", {
                    required: "Campo Obrigatório"
                  })}
                >
                  {unit && (
                    unit.map(un => (
                      <option value={un.id} key={un.id}>{un.name}</option>
                    ))
                  )}
                </select>
                {errors.unitId && (
                  <div className="invalid-feedback d-block mb-4">
                    {errors.unitId.message}
                  </div>
                )}
              </div>
              <button className="btn btn-primary">Salvar</button>
            </div>
          </form>
        </ModalBase>
      </div>
      <div className="itens-grid">
        {isLoader ? <CardListLoader /> : (
          userResponse?.map(user => (
            <CardList name={user.name} key={user.id} />
          ))
        )}
      </div>
    </section>
  );
}

export default UserScreen;