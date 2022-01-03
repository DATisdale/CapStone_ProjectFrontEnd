import axios from "axios";
import React, {useState,useEffect} from "react";
import NavigationBar from "../navigationbar/NavigationBar"
import { Avatar } from "@mui/material";

const Userprofile = () => {
    const [user, getUser] = useState([]);
    


useEffect(()=>{
    axios.get('http://localhost:5000/api/users/current')
    .then(res=>{
        console.log(res)
        getUser(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
});
 
return (
    <div>
        <NavigationBar/>
        <div className="Userprofile">
            <div className="Userprofilebar">
            <Avatar src="/broken-image.jpg" sx={{width: 180, height:180}} className="Userprofile-avatar"/>
            {user.map(() =>(
              <div className ="profilecontainer" key={user._id}>
                  <div className="userinfo">
                      <h3>{user.name}</h3>
                      <p>I assume user quote or something goes here</p>
                  </div>
                    <div className ="user attributes">
                        <div>{user.height}</div>
                        <div>{user.weight}</div>
                    </div>

              </div> 
            ))}
            </div>
        </div>
    </div>
)

}
export default Userprofile