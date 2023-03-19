import React, { /*Component,*/ useState } from "react";
import { Link } from 'react-router-dom';
import Styles from './Loger.module.css';

export default function Loger ({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    login(userData);
  };

    return(
        <div className={Styles.container}>
          
          <div className={Styles.frontPage}>
            <img
              className={Styles.logo}
              src="https://sacudete.icbf.gov.co//themes/sacudetethemev2/assets/img/agendate.png"
              alt="img" />
          </div>
          
          <div className={Styles.formBox}>
            <form onSubmit={handleSubmit}>
              <div className={Styles.formGroup}>
                <h2>Bienvenido</h2>
                <div className={Styles.inputBox}>
                  <ion-icon name="mail-outline"></ion-icon>
                  <label htmlFor='email'>Email: </label>
                  <input
                    id='email'
                    name="email"
                    type="email"
                    value={userData.email}
                    placeholder="Ingresa tu email"
                    onChange={handleInputChange}
                    required />
                </div>
              </div>
                <div className={Styles.formGroup}>
                  <div className={Styles.inputBox}>
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <label htmlFor='password'>Contraseña: </label>
                    <input
                      id='password'
                      name="password"
                      type="password"
                      value={userData.password}
                      placeholder="Ingresa tu contraseña"
                      onChange={handleInputChange}
                      required />
                  </div>
                </div>
              <button
                className={Styles.button}
                type="submit" >
                Ingresar
              </button>
              <div className={Styles.register}>
                <p>No tenes cuenta <Link to='/sign-up'>Registrate</Link></p>
              </div>
            </form>
          </div>
        </div>
    );
}
