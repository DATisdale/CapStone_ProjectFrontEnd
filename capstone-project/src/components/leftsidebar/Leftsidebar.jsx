import React, {Component} from 'react'
import axios from 'axios'


class Leftsidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            exercises:[],
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
    this.setState({
        exercises:response.data
    })
}

addExerciseToList(exercise){
    console.log(exercise)

}



render(){
    return(
        <div>
            {this.state.exercises.map(exercise =>{
                return(
                    <div onClick={()=>this.addExerciseToList(exercise)}>
                    <h4>{exercise.name}</h4>
                    <img src={exercise.gifUrl}/>
                    <hr />
                    </div>
                   
                )
            })}
        </div>
    )
}

}
export default Leftsidebar;