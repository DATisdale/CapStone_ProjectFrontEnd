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
      
        console.log(response);
        localStorage.setItem('token', response.data)
        localStorage.setItem('username', getUser.email)
        window.location = '/Schedule';
      
    }
  
          return (
            <form className="signup" onSubmit={handlesubmit}>
              <h1>Sign In</h1><br /><br />
              <label>Username</label>
              <input  onChange={(event) => getEmail(event.target.value)} type='text' defaultValue={"jjvega@devcodecamp.com"} />
      
              <label>Password</label>
              <input  onChange={(event) => getPassword(event.target.value)} type='text' defaultValue={"BillyBobWins"} /> 
              <br />         
              <button type='submit' class='landingP'>Log in</button>
              <Button href="/Register" variant="text">Signup</Button>
              <br/>
            </form>
          );
      }
      
  export default Login;