import React, {useState} from 'react';
import "./Register.css"
import axios from 'axios'
import Schedule from '../schedule/Schedule';

function Register(props){
    const [name,setName]= useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');
    const [height, setHeight]=useState('');
    const[weight,setWeight]=useState('')


async function handleSubmit(e){
    e.preventDefault();
    const postUser={
        name:name,
        email:email,
        password:password,
        height:height,
        weight:weight,
        isAdmin:true
    };
    let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
    if(response.status === 200){
        window.location = '/login'
    }
}

return(
    <div>
    <form className = "register" onSubmit={handleSubmit}>

        <h1>Register</h1>< br/> <br/>
        <label>name</label>
        <input value={name} onChange={(event)=>setName(event.target.value)} type='text'/>
<br/>
        <label>Email</label>
        <input value ={email} onChange={(event)=> setEmail(event.target.value)} type = 'text'/>
        <br/>
        <label>Password</label>
        <input value={password} onChange={(event)=>setPassword(event.target.value)} type = 'password'/>
        <br/>
        <label>Height</label>
        <input value={height} onChange={(event)=>setHeight(event.target.value)} type = 'text'/>
        <br/>
        <label>Weight</label>
        <input value={weight} onChange={(event)=>setWeight(event.target.value)} type = 'text'/>
        <br/><br/><br/>

        
         <button type = 'submit'>Create User</button>
    </form>
    </div>

    
)
}

export default Register;