import React, {Component} from 'react'
import axios from 'axios'
import './Leftsidebar.css'


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

addExerciseToList(exercise){
    console.log(exercise)

}



render(){
    return(
        <div>
            {this.state.backExercises.map(exercise =>{
                return(
                    <div onClick={()=>this.addExerciseToList(exercise)}>
                    <h4>{exercise.name}</h4>
                    <img src={exercise.gifUrl}/>
                    <hr />
                    </div>
                    ) })}
            
        </div>
    )

    
}

}

export default Exerciselist