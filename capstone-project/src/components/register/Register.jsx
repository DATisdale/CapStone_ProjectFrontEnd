import React, {useState} from 'react';
import "./Register.css"
import axios from 'axios'

function Register(props){
    const [name,setName]= useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');
    


async function handleSubmit(e){
    e.preventDefault();
    const postUser={
        name:name,
        email:email,
        password:password,
        isAdmin:true
    };
    let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
    if(response.status == 200){
        window.location = '/login'
    }
}

return(
    <form className = "register" onSubmit={handleSubmit}>
        <label>name</label>
        <input value={name} onChange={(event)=>setName(event.target.value)} type='text'/>

        <label>Email</label>
        <input value ={email} onChange={(event)=> setEmail(event.target.value)} type = 'text'/>

        <label>Password</label>
        <input value={password} onChange={(event)=>setPassword(event.target.value)} type = 'text'/>

        
         <button type = 'submit'>Create User</button>
    </form>

    
)
}

export default Register;