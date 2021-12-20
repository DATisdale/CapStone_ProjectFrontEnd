import React, { useState } from 'react';
import Button from '@mui/material/Button';
import "./Login.css";
import axios from 'axios';
//import PropTypes from 'prop-types'
//import { Login } from '@mui/icons-material';

function Login(){
    const[email,getEmail]=useState('');
    const[password, getPassword]=useState('');


async function handlesubmit(e){
    e.preventDefault();


const getUser={
    email:email,
    password:password
}
let response = await axios.post(`http://localhost:3000/api/users/login`, getUser)
if(response.status ==200){
    console.log(response.data);
    localStorage.setItem('token', response.data)
    window.location = '/'

    }
}
        return (
            <form className = "login" onSubmit={handlesubmit}>
                <lable>Username</lable>
                <input value={email} onChange={(event)=>getEmail(event.target.value)} type ='text'/>

                <label>Password</label>
                <input value={password} onChange={(event)=> getPassword(event.target.value)} type='text'/>
                <button href="/profile" type = 'submit'> Log in </button>
                <Button href= "/register" variant="text">Register</Button>
            </form>
        )
        }

        export default Login