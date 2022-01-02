import React,{useState} from 'react';
import Button from '@mui/material/Button';
import "./Login.css";
import axios from 'axios';

//import { Login } from '@mui/icons-material';


function Login(props){
    // const [username,getUsername]=useState('');
    const[email, getEmail]=useState('');
    const[password, getPassword]= useState('');
  
    async function handlesubmit(e){
      e.preventDefault();
  
      const getUser={
        email:email,
        password:password,
        
      };
      console.log(getUser)


      let response = await axios.post(`http://localhost:5000/api/users/login`, getUser);
      
        console.log(response.data);
        localStorage.setItem('token', response.data)
        window.location = '/';
      
    }

    
  
          return (
            
            <form className="signup" onSubmit={handlesubmit}>
              <label>Username</label>
              <input  onChange={(event) => getEmail(event.target.value)} type='text' />
      
              <label>Password</label>
              <input  onChange={(event) => getPassword(event.target.value)} type='text' />          
              <button type='submit'>Log in</button>
              <Button href="/signup" variant="text">Signup</Button>
            </form>
          );
      }
      
  export default Login;