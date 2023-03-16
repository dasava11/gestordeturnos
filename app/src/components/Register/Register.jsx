import React from "react";
import styled from "styled-components";
import style from './Register.module.css'
import { useState } from "react";

const ContainerR = styled.div`
border: 1px solid black;
width:50%;
margin: 0 auto;
`
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validation(inputs){
    let errors = {}

    if(!regexEmail.test(inputs.email)){
        errors.email = 'Debe ser un correo electronico'
    }

    if(inputs.name === ''){
        errors.name = 'Ingresa un nombre'
    }

    if(inputs.lastName === ''){
        errors.lastName = 'Ingresa un apellido'
    }

    if(inputs.password === ''){
        errors.password = 'Ingresa una contraseña'
    }

    return errors
}


const Register = ()=>{

    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        email:''
    })

    const [errors, setErrors] = useState({
        name: '',
        lastName: '',
        email:''
    })

    const handleOnChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })

        setErrors(
            validation({
                ...errors,
                [e.target.name]: e.target.value
            })
        )
    }

    console.log(inputs)

    return(
        <ContainerR  >
            <h1>Registrate</h1>
            <form className={style.dflex} >
                <label>Nombre:</label>
                <input 
                    type="text"
                    placeholder="Escribe tu nombre..."
                    name="name"
                    onChange={(e) => handleOnChange(e)}
                    value={inputs.name}
                />
                <label>Apellido:</label>
                <input 
                    type="text"
                    placeholder="Escribe tu apellido..." 
                    name="lastName"
                    onChange={(e) => handleOnChange(e)}
                    value={inputs.lastName}
                />
                <label>Email:</label>
                <input 
                    type="email"
                    placeholder="Escribe tu email..."  
                    name="email"
                    onChange={(e) => handleOnChange(e)}
                    value={inputs.email}
                />
                <label>Password</label>
                <input 
                    type="password"
                    placeholder="Escribe tu password..."  
                    name="email"
                    onChange={(e) => handleOnChange(e)}
                    value={inputs.password}
                />
            </form>   
        </ContainerR>
    )
}

export default Register