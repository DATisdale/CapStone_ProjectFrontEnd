import React, {Component} from 'react'

import './Navbar.css'

class Navbar extends Component{
    render(){
        return (
            <div>
                <ul id="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Exercises</a></li>
                    <li><a href="#">Progress</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        )
    }
}

export default Navbar