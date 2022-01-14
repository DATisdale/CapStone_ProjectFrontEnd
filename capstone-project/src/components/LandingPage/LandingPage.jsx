import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter, Link } from "react-router-dom";
import Login from '../login/Login';
import '../LandingPage/LandingPage.css'

//import { Login } from '@mui/icons-material';



function LandingPage(props) {

    return (
        <div class="regLog">
            <Link to="/login">
                <button class="btn btn-primary btn-lg disabled landingP" >Login</button>
            </Link>
            <Link to="/Register">
                <button class="btn btn-primary btn-lg disabled landingP" >Register</button>
            </Link>
        </div>


    );

}


export default LandingPage;