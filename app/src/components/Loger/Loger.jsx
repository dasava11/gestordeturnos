import React, { Component, useState } from "react";
import styled from 'styled-components';

const Door = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
`

const Login = styled.form`
border: 2px solid grey;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
width: 20%;
`

const Data = styled.input`
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
margin-left: 3rem;
margin-right: 3rem;
margin-top: 2.5rem;

`
const Click = styled.button`
font-family: Arial, Helvetica, sans-serif;
font-size: 1rem;
border: none;
border-radius: 5px;
padding: 0.2rem;
background-color: #aaaaef;
margin-left: 4rem;
margin-right: 4rem;
margin-top: 2rem;

cursor: pointer;
`
const R = styled.a`
font-family: Arial, Helvetica, sans-serif;
font-size: 0.8rem;
margin-bottom: 2.5rem;

`

const Loger = ()=> {
const [input, setInput] = useState(
    {
     email: '',
     password: ''   
    }
)

const handleChange = (event) => {
const {name, value} = event.target
setInput({...input, [name]: value})
}

const handleSubmit = () => {
console.log(input)
alert('Registrado')
}

    return(
        <Door>
        <Login onSubmit={handleSubmit}>
            <Data name="email" type="email" placeholder="Enter email" onChange={(e)=>handleChange(e)}/>
            <Data name="password" type="password" placeholder="Enter password" onChange={(e)=>handleChange(e)}/>
            <Click type="submit">Login</Click>
            <R href="">Registrar</R>
        </Login>
        </Door>
    )
}

export default Loger