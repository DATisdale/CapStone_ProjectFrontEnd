//import logo from './logo.svg';
import './App.css';
//import { ThirtyFpsTwoTone } from '@mui/icons-material';
import jwtDecode from 'jwt-decode';
import React, {Component} from "react"
//import Login from './components/login/Login';
 //import Register from './components/register/Register'
// import jwtDecode from 'jwt-decode';
// import {Switch, Route, Redirect} from "react"
import Logout from './components/logout/Logout';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  constructor(props){
    super(props);
    const jwt = localStorage.getItem('token');
    try{
      const decodedUser= jwtDecode(jwt);
      this.state={
        user: decodedUser,
      }
    }catch{
      this.state ={
        user:null
      }
    }
  }
componetDidMount(){
  const jwt=localStorage.getItem('token')
  try{
    const decodedUser=jwtDecode(jwt);
    this.setState({user:decodedUser});

  }catch{

  }
}
render() {
  return(
    <div className = "App">
   <Navbar/>
    </div>
  )
}
}

export default App; 