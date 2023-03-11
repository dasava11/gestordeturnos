import React from "react";
import {Router} from 'react-router-dom';
import styled from "styled-components";

const ContainerR = styled.div`
border: 1px solid black;
`

const Register = ()=>{
    return(
        <ContainerR>
            <form>
                <h1>Formulario Registro</h1>
            </form>   
        </ContainerR>
    )
}

export default Register