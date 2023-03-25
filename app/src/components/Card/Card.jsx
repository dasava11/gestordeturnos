import React from "react";

export default function Card ({ nombre, apellido, dni,
                                email, doctor, lugarDeTurno,
                                onClose}) {
  return (
    <div>
      <button onClick={onClose}>X</button>
      <h1>{nombre}</h1>
      <h1>{apellido}</h1>
      <h2>{dni}</h2>
      <h2>{email}</h2>
      <h3>{doctor}</h3>
      <h3>{lugarDeTurno}</h3>
    </div>
  );
};
