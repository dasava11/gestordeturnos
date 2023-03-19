import React from "react";

export default function Card ({ nombre, apellido }) {
  return (
    <div>
      <p>{nombre}</p>
      <p>{apellido}</p>
    </div>
  );
};
