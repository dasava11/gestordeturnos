import React, { useState } from "react";

const Loguer = ()=> {
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
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Enter email" onChange={(e)=>handleChange(e)}/>
            <input name="password" type="password" placeholder="Enter password" onChange={(e)=>handleChange(e)}/>
            <button type="submit">Login</button>
        </form>
    )
}

export default Loguer