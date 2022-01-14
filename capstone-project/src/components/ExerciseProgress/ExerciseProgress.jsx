import "./ExerciseProgress.css"
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import NavigationBar from '../navigationbar/NavigationBar';
import Chart from "chart.js/auto";
import axios from 'axios';
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
const config = {
    headers: {
        'x-auth-token': localStorage.getItem('token')
    }
}

const ExerciseProgress = () => {
    const [exercises, setExercises] = useState([]);
    const [currentExercise, setCurrentExercise] = useState('');
    useEffect(() => {
        const getExercises = async () => {
            const res = await axios.get('http://localhost:5000/api/workouts', config)

            setExercises(res.data)
        }
        getExercises()


    }, [])




    const exercisesByName = exercises.reduce((exerciseObj, exercise) => {
        // If exercise is not in obj, put it in there
        console.log('exercise in reduce', exercise, exerciseObj[exercise.name])
        if (!exerciseObj[exercise.name]) {
            exerciseObj[exercise.name] = [exercise];
        } else {
            exerciseObj[exercise.name].push(exercise);
        }
        return exerciseObj

    }, {});

    const exerciseData = {
        labels: [],
        datasets: [{
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            label: 'Weight Progression'
        },
        {
            fill: false,
            borderColor: 'rgb(255, 0, 0)',
            label: 'Rep Progression'
        },
        ]
    }

    if (exercisesByName[currentExercise]) {
        exerciseData.labels = exercisesByName[currentExercise].map(exercise => new Intl.DateTimeFormat('en-US').format(new Date(exercise.date)));
        exerciseData.datasets[0].data = exercisesByName[currentExercise].map(exercise => exercise.weight);
        // exerciseData.datasets[1].data = exercisesByName[currentExercise].map(exercise => exercise.reps);
    }
    console.log('data', exerciseData);
    console.log(exercises);
    if (exercises.length === 0) {
        return (<h1>Loading</h1>)
    }
    return <div>
        <NavigationBar />
        <select onChange={(e) => setCurrentExercise(e.target.value)}>
            <option selected disabled>Choose Exercise</option>
            {Object.keys(exercisesByName).map(exercise => (
                <option value={exercise}>{exercise}</option>
            ))}
        </select>
        <div className="graph">

            <Line
                data={exerciseData}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    </div>
}

export default ExerciseProgress