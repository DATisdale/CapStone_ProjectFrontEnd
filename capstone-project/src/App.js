import React,{Component} from 'react';
import "./App.css"
import { BrowserRouter, Route,Navigate,Routes, Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavigationBar from './components/navigationbar/NavigationBar';
import axios from 'axios';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { appBarClasses } from '@mui/material';
import Schedule from './components/schedule/Schedule';
import { Switch } from '@mui/material';
import LandingPage from './components/LandingPage/LandingPage';
import Exerciselist from './components/exerciselist/Exerciselist'
import Userprofile from './components/userprofile/Userprofile'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './components/NavbarElements'
import Progressionchart from './components/progressionchart/Progressionchart';
import Logout from './components/logout/Logout';
import ExerciseProgress from './components/ExerciseProgress/ExerciseProgress';
import RepProgress from './components/RepProgress/RepProgress';


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
    <BrowserRouter >

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/exerciseList" element={<Exerciselist /> } />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/Userprofile" element={<Userprofile />} />
        <Route path="/Progressionchart" element={<ExerciseProgress />} />
        <Route path="/RepProgress" element={<RepProgress />} />
        <Route path="/Logout" element={<Logout />} />


      </Routes>
      </BrowserRouter>


    
  )
}
}
export default App

