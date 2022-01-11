import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Userprofile.css"
import NavigationBar from '../navigationbar/NavigationBar';
const config = {
    headers: {
        'x-auth-token': localStorage.getItem('token')
    }
}
const Userprofile = () => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");


    const profileData = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/users/current", config)
            console.log(res)
            setName(res.data.name)
            setHeight(res.data.height)
            setWeight(res.data.weight)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        profileData()
    }, []);
    return <div>
        <NavigationBar />
        <div className="card">
            <h1>{name}</h1>
            <p>User Stats</p>
            <p>{height}</p>
            <p>{weight}</p>
        </div>
    </div>

}


export default Userprofile