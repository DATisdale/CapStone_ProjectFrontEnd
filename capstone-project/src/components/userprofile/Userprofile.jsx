import axios from "axios";
import React, {useState,useEffect} from "react";
import "./Userprofile.css"
import NavigationBar from '../navigationbar/NavigationBar';

const Userprofile = () => {
    const[name,setName] = useState ("");
    const[height,setHeight] = useState("");
    const[weight,setWeight]= useState("");


    const profileData = async () => {
      try  {
          const res = await axios.get("http://localhost:5000/api/users/current")
          setName(res.data.results[0].name)
          setHeight(res.data.results[0].height)
          setWeight(res.data.results[0].weight)
          console.log(res)
      }catch(error){
       console.log(error)
      }
    };

    useEffect(()=>{
     profileData()  
    },[]);
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