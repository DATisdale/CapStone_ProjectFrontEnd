import axios from "axios";
import React, {Component} from "react";


class Userprofile extends Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            height:this.props.height,
            weight:this.props.weight
        }
    }
fetchUserDetails(user_id){
    // console.log(user_id);
    axios.get("http://localhost:3000/api/users/user_id")
}
 componentDidMount(){
     this.fetchUserDetails(this.state.user_id);
 }

 render (){
     return(
         <div>
        
         </div>

     )
 }
}
export default Userprofile;