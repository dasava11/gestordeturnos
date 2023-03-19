import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loger from "./components/Loger/Loger";
import Cards from './components/Cards/Cards';
import Register from "./components/Register/Register";
import "./App.css";

export default function App() {
  const [access, setAccess] = useState(false)
  const username = 'nahuel@gmail.com';
  const password = 'nahuel1234';

  const navigate = useNavigate();

  const login = userData => {
    if (userData.username === username &&
        userData.password === password) {
      setAccess(true);
      navigate('/home');
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Loger login={login} />}
        />
        <Route path='/home' element={<Cards />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}
