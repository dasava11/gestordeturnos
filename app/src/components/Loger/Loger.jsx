import React, { Component, useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Door = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
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
padding-bottom: 1rem;
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
const R = styled.span`
font-family: Arial, Helvetica, sans-serif;
font-size: 0.8rem;
margin-bottom: 2.5rem;
`
const Portada = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 3rem;
`

const Logo = styled.img`
width: 70%;
margin: 0 auto;
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
        <Portada>
            <Logo src="https://sacudete.icbf.gov.co//themes/sacudetethemev2/assets/img/agendate.png" alt="Logo" />
        </Portada>   
        <Login onSubmit={handleSubmit}>
            <Data name="email" type="email" placeholder="Enter email" onChange={(e)=>handleChange(e)}/>
            <Data name="password" type="password" placeholder="Enter password" onChange={(e)=>handleChange(e)}/>
            <Click type="submit">Login</Click>
            <Link to='/sign-up'><R>Registrarse</R></Link>
        </Login>
        </Door>
    )
}

export default Loger