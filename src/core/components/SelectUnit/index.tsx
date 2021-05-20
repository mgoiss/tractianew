import { Unit } from "core/types/unit";
import { makeResquet } from "core/utils/request";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

type FormUnit = {
  id: number;
}

const SelectUnit = () => {
  const [unit, setUnit] = useState<Unit[]>();
  const { register, formState: { errors } } = useForm<FormUnit>();

  useEffect(() => {
    makeResquet({ url: '/units' })
      .then(response => setUnit(response.data))
  }, [])

  return (
    <div className="d-flex flex-column">
      <select
        required={true}
        className={`input-base custom-select select-base ${errors.id ? 'is-invalid' : 'mb-4'}`}
        {...register("id", {
          required: "Campo Obrigatório"
        })}
      >
        {unit && (
          unit.map(un => (
            <option value={un.id}>{un.name}</option>
          ))
        )}
      </select>
      {errors.id && (
        <div className="invalid-feedback d-block mb-4">
          {errors.id.message}
        </div>
      )}
    </div>
  );
}

export default SelectUnit;