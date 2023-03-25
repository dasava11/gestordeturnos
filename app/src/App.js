import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loger from "./components/Loger/Loger";
import Cards from './components/Cards/Cards';
import Register from "./components/Register/Register";
import NavBar from './components/NavBar/NavBar';
import ejPacientes from './data';
import "./App.css";

export default function App() {
  const [pacientes, setPacientes] = useState([]);
  const [access, setAccess] = useState(false);
  const email = 'nahuel@gmail.com';
  const password = 'nahuel1234';

  const navigate = useNavigate();
  const location = useLocation();

  // Revisar esta función.
  const buscarPaciente = dni => {
    setPacientes(
      ...pacientes,
      ejPacientes.map(paciente => paciente.dni === dni),
    );
  };

  const login = userData => {
    if (userData.email === email &&
        userData.password === password) {
      setAccess(true);
      navigate('/home');
    } else alert('Acceso denegado');
  };

  const logout = () => {
    setAccess(false);
    navigate('/');
  };

  const onClose = dni => {
    setPacientes(pacientes.filter(paciente => paciente.dni !== dni));
  };

  // Prohibe el acceso al usuario sino provee
  // un email y una contraseña.
  useEffect(() => {
    !access && navigate('/')
    // eslint-disable-next-line
  }, [access]);

  return (
    <div className="App">
      {(location.pathname !== '/' && location.pathname !== '/sign-up') &&
       <NavBar buscarPaciente={buscarPaciente} logout={logout} />}
      <Routes>
        <Route
          path='/'
          element={<Loger login={login} />}
        />

        <Route
          path='/home'
          element={<Cards
                     onClose={onClose}
                     pacientes={pacientes} />}
        />

        <Route
          path="/sign-up"
          element={<Register />}
        />
      </Routes>
    </div>
  );
}
