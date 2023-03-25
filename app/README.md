**Para empezar a trabajar, primero en la carpeta raiz, a la altura del archivo package.json abren la consola, la integrada del visual o la que quieran, y ejecutan el comando "npm install" o "npm i"**

**Después pueden empezar a trabajar en el repo viéndolo en tiempo real en un explorador ejecutando el comando "npm start"**

* Login component -> componente login (HECHO)
        -> un formulario con
            -> un input para el nombre
            -> un input para la contraseña
            -> un boton type submit

* Sign In component -> componente crear cuenta
        -> un formulario con
            -> un input para el nombre
            -> un input para la contraseña
            -> un input para repetir la contraseña
            -> un input para el mail
            -> un boton tipo submit

* searchBar component -> componente para buscar "algo"
        -> un formulario con
            -> un input para buscar
            -> un boton tipo submit

* Home Page 
        -> navBar
              -> login component
              -> signin component
              -> searchBar component
        -> body 
              -> graficar los turnos
                    -> card component 
                            -> renderizar los turnos

* Definir el modelo de turnos

ej: turno = [{
  paciente: "alan",
  dni: 32670268,
  email: asdasd@asdasd.com
  doctor: "pepe",
  fecha: 16/03/2023 16:45,
  lugar_de_turno: "asdasda"
}]

usuario = []

doctor = []
