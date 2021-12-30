import React,{Component} from 'react';
import "./App.css"
import { Route,Navigate,Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import NavigationBar from './components/navigationbar/NavigationBar';
import axios from 'axios';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { appBarClasses } from '@mui/material';
import Schedule from './components/schedule/Schedule';
import { Switch } from '@mui/material';



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
    <div className ="App">
      {console.log('User',user)}
      <Register/>

      </div>
    
  )
}
}
export default App