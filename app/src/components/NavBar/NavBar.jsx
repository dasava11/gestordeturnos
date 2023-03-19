import SearchBar from '../SearchBar/SearchBar';
import Styles from './NavBar.module.css';

export default function NavBar({ buscarPaciente, logout }) {
  return (
    <div className={Styles.container}>
      <h1>Home</h1>
      <SearchBar buscarPaciente={buscarPaciente} />
      <button
        className={Styles.button}
        onClick={() => logout()} >
        Salir
      </button>
    </div>
  );
}
