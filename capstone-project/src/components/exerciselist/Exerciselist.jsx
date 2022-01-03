import React, {Component} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route,  Navigate, BrowserRouter, Link} from "react-router-dom";
import Schedule from '../schedule/Schedule';
import "./Exerciselist.css"


var listOfExercises = []


class Exerciselist extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises:[],
            armExcercises:[],
            backExercises:[],
            personalExercises:[]
        }
    }



componentDidMount() {
    this.getExercise()
}
async getExercise(){
    let configObject ={
        headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key" : "af2dbdd3c1msh5d755e1bc1b3c58p1774e0jsn551b477f9881"
        }
    }
    let response = await axios.get('https://exercisedb.p.rapidapi.com/exercises',configObject)
    console.log(response.data);
    let armExcercises = [];
    let backExercises = [];
    response.data.map(el =>{
        if(el.bodyPart == "back"){
            backExercises.push(el)
        }
        else if(el.bodyPart == "arms"){
            armExcercises.push(el)
        }
    })
    this.setState({
        backExercises: backExercises,
        armExcercises: armExcercises
    })
    // this.setState({
    //     exercises:response.data
    // })
}

addExerciseToList(exercise, props){
    listOfExercises.push(exercise)
    console.log(listOfExercises)
    console.log(props)


}



render(props){
    return(
        <div>
              <Link to={newTo} >
         <button >Make Your Schedule</button>
         </Link><br/><br/><br/>
            {/* <button onClick={useEffect((()=>{
                localStorage.clear()
            },[]))}/> */}
            {this.state.backExercises.map(exercise =>{
                return(
                    <div>
                       
                    <div onClick={()=>this.addExerciseToList(exercise, props)}>
                    <h4>{exercise.name}</h4>
                    <img src={exercise.gifUrl}/>
                    <hr />
                    </div>
                    </div>
                    ) })}
            
        </div>
    )

    
}

}

const newTo = {
    pathname: "/Schedule",
    param: listOfExercises

};

export default Exerciselist;