import { useState } from "react";
import Styles from './SearchBar.module.css';

export default function SearchBar({ buscarPaciente }) {
  const [paciente, setPaciente] = useState('');

  const handleChange = event => {
    setPaciente(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setPaciente('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={Styles.container}>
        <input
          value={paciente}
          onChange={handleChange}
          type='search'
          className={Styles.input}
          placeholder='Buscar dni paciente'
        />
        <button
          type='submit'
          className={Styles.button}
          onClick={() => buscarPaciente(paciente.dni)} >
          Agregar
        </button>
      </div>
    </form>
  )
}
