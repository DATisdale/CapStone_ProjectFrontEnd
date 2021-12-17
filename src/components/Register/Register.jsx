import React, {useState} from 'react';
import "./Register.css"
import axios from 'axios'

function Register(props){
    const [username,setUsername]= useState('');
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');
    const [height,setHeight]=useState('');
    const [weight, setWeight]=useState('');


async function handleSubmit(e){
    e.preventDefault();
    const postUser={
        name:username,
        email:email,
        password:password,
        height:height,
        weight:weight,
        isAdmin:false
    };
    let response = await axios.post(`http://localhost:5000/api/users/register`, postUser);
    if(response.status == 200){
        window.location = '/login'
    }
}

return(
    <form className = "register" onSubmit={handleSubmit}>
        <label>Username</label>
        <input value={username} onChange={(event)=>setUsername(event.target.value)} type='text'/>

        <label>Password</label>
        <input value ={password} onChange={(event)=> setPassword(event.target.value)} type = 'text'/>

        <label>Email</label>
        <input value={email} onChange={(event)=>setEmail(event.target.value)} type = 'text'/>

        <label>Height</label>
        <input value={height} onChange={(event)=>setHeight(event.target.value)} type = 'text'/>
         
         <label>Weight</label>
         <input value={weight} onChange={(event)=>setWeight(event.target.value)} type = 'text'/>

         <button type = 'submit'>Create User</button>
    </form>

    
)
}

export default Register;