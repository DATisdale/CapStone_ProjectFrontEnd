import React,{useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route,  Navigate, BrowserRouter, Link} from "react-router-dom";
import Login from '../login/Login';

//import { Login } from '@mui/icons-material';



function LandingPage(props){
  
          return (
              <div>
                <Link to="/login">
         <button class="btn btn-primary btn-lg disabled" >Login</button>
         </Link>&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to="/Register">
         <button class="btn btn-primary btn-lg disabled" >Register</button>
         </Link>
              </div>
              

          );
       
      }

       
  export default LandingPage;