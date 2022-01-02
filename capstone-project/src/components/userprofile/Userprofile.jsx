import axios from "axios";
import React, {useState,useEffect} from "react";

const Userprofile = () => {
    const [name,setName] = useState('')
    const [height,setHeight] =useState('')
    const [weight,setWeight] = useState('')
}

useEffect(()=>{
    axios.get('http://localhost:5000/api/users/current')
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
})


export default Userprofile