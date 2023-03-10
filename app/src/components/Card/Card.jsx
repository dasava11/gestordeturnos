import React from "react";

export const Card = ({ nombre, apellido }) => {
  return (
    <div>
      <p>{nombre}</p>
      <>{apellido}</>
    </div>
  );
};
