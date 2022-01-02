import React,{useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import PropTypes from 'prop-types'
//import { Login } from '@mui/icons-material';



function LandingPage(props){
  
          return (
              <div>
                Test
         <button onClick={() => login()}>Login</button>
              </div>
              

          );

          function login() {
            window.location.href='../login/Login'
        
        }

       
      }

       
  export default LandingPage;