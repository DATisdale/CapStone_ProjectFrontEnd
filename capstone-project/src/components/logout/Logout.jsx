import * as React from 'react';
import "./Logout.css"

export default function Logout() {
    const logOutBtn = () => {
        localStorage.removeItem("token");
        window.location.assign("/"); 
    }
  return(
      <button onClick={() => logOutBtn()}>log out </button>
  )};