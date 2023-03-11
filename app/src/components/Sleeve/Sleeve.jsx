import React from 'react';
import styled from 'styled-components';

const Portada = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
margin: 3rem;
`

const Logo = styled.img`
width: 25%;
margin: 0 auto;
`

const Sleeve = ()=>{
    return(
     <Portada>
        <Logo src="https://sacudete.icbf.gov.co//themes/sacudetethemev2/assets/img/agendate.png" alt="Logo" />
     </Portada>   
    )
}

export default Sleeve