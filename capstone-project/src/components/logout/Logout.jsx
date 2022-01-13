import * as React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import "./Logout.css"

export default function Logout() {
    const logOutBtn = () => {
        localStorage.removeItem("token");
        window.location.assign("/");
    }
    return (
        <div >
            <NavigationBar />
            <button onClick={() => logOutBtn()}>Are you sure you want to log out? </button>
        </div>
    )
};