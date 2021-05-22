import { Unit } from 'core/types/unit';
import { makeResquet } from 'core/utils/request';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

type formAsset = {
  sensors: string,
  model: string,
  name: string,
  image: FileList,
  unitId: number,
  companyId: number
}

const ModalAssets = () => {
  const [unit, setUnit] = useState<Unit[]>();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<formAsset>();

  useEffect(() => {
    makeResquet({ url: '/units' })
      .then(response => setUnit(response.data))
  }, [])


  const onSubmitModal = (data: formAsset) => {
    data.companyId = 1;
    makeResquet({ url: '/assets', method: 'POST', data })
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
        setValue('model', '');
        setValue('sensors', '');
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmitModal)} className="form-modal">
      <div className="line-info-modal">
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
            type="text"
            className={`form-control input-base ${errors.model ? 'is-invalid' : 'mb-4'}`}
            placeholder="Modelo"
            {...register("model", {
              required: "Campo Obrigatório",
              minLength: { value: 3, message: 'O campo deve ter no mínimo 3 caracteres' },
            })}
          />
          {errors.model && (
            <div className="invalid-feedback d-block mb-4">
              {errors.model.message}
            </div>
          )}
        </div>
      </div>
      <div className="line-info-modal">
        <div className="d-flex flex-column">
          <select
            required
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
        </div>
        <div className="d-flex flex-column">
          <input
            type="text"
            className={`form-control input-base ${errors.sensors ? 'is-invalid' : 'mb-4'}`}
            placeholder="Modelo"
            {...register("sensors", {
              required: "Campo Obrigatório",
              minLength: { value: 3, message: 'O campo deve ter no mínimo 3 caracteres' },
            })}
          />
          {errors.sensors && (
            <div className="invalid-feedback d-block mb-4">
              {errors.sensors.message}
            </div>
          )}
        </div>
      </div>
      <div className="line-info-modal ">
        <div>
          <input
            type="file"
            accept="image/png, image/jpg"
            className={`form-control input-base ${errors.image ? 'is-invalid' : 'mb-2'}`}
            {...register("image", {
              required: "Campo Obrigatório"
            })}
          />
          {errors.unitId ? (
            <div className="invalid-feedback d-block mb-4">
              {errors.unitId.message}
            </div>
          ) : <h4>As imagens devem ser  JPG ou PNG</h4>}
        </div>
        <button className="btn btn-primary align-self-end">Salvar</button>
      </div>
    </form>
  )
}

export default ModalAssets;