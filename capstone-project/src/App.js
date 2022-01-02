import React,{Component} from 'react';
import "./App.css"
import jwtDecode from 'jwt-decode';
import NavigationBar from './components/navigationbar/NavigationBar';
import axios from 'axios';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { appBarClasses } from '@mui/material';
import Schedule from './components/schedule/Schedule';
import { BrowserRouter as Router, Routes, Route,  Navigate} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Userprofile from  './components/userprofile/Userprofile'



class App extends Component{
  state ={
    user:''
  }


  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
      const user =jwtDecode(jwt);
      this.setState({user
      })
    } catch{

    }
  }
render(){
  const user =this.state.user;
  return(
    <div>
    <Login/>
    </div>
  )
}
}
export default App