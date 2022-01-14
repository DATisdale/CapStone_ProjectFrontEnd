import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import "./Schedule.css";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import NavigationBar from '../navigationbar/NavigationBar';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import Alert from '../alert/Alert';
import { textAlign } from '@mui/system';
const schedule = require('node-schedule')

// Prompt them every new day 

// If the user has exercises for the previous day, then we can prompt the user to copy over the previous day's exercises (and maybe even let them have the option of increasing the weight and reps)



//import { Login } from '@mui/icons-material';

function Schedule(props) {

    const config = {
        headers: {
            'x-auth-token': localStorage.getItem('token')
        }
    }



    const [currentDate, setCurrentDate] = useState(new Date());
    const [exercises, setExercises] = useState([]);

    const [isPrompt, setIsPrompt] = useState(localStorage.getItem('prompt') || false);
    const [isOpen, setIsOpen] = useState(false);

    const [newDisplayExercises, setNewDisplayExercises] = useState({
        "name": "",
        "date": new Date(),
        "reps": 0,
        "weight": 0
    });

    // Grab any existing exercises created by the user from the backend
    useEffect(() => {
        const getExercises = async () => {
            const res = await axios.get('http://localhost:5000/api/workouts', config)
            console.log('exercises for this user', res);
            setExercises(res.data)
        }
        getExercises()

        const last_visited = localStorage.getItem('last_visited') ? JSON.parse(localStorage.getItem('last_visited')) : null;
        console.log('last visited', last_visited);
        if (!last_visited) {
            localStorage.setItem('prompt', true);
            setIsPrompt(true);
            localStorage.setItem('last_visited', JSON.stringify(new Date()));
        }
        if (last_visited && !compareDates(new Date(last_visited), new Date())) {
            localStorage.setItem('prompt', true);
            setIsPrompt(true);
            localStorage.setItem('last_visited', JSON.stringify(new Date()));
        }



    }, [])

    useEffect(() => {
        if (exercises.length > 0 && isPrompt === true) {
            var oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
            console.log('one week ago', oneWeekAgo)
            const exists = exercises.some(exercise => {
                if (compareDates(oneWeekAgo, new Date(exercise.date))) {

                    return true;
                }
                return false;
            })
            if (exists) {
                setIsOpen(true)
            }
            console.log('exists', exists)

        }

    }, [exercises, isPrompt])



    function onChange(e) {

        setNewDisplayExercises({ ...newDisplayExercises, [e.target.name]: e.target.value });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/workouts/createworkout', newDisplayExercises, config);
        console.log('created a new exercise', res);
        setExercises([...exercises, res.data]);
    }

    function setDate(date) {
        setCurrentDate(date)
        setNewDisplayExercises({ ...newDisplayExercises, date: date });
    }
    function compareDates(d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate()
    }

    const exercisesByDate = exercises.filter(exercise => {
        const exerciseDate = new Date(exercise.date);

        if (compareDates(exerciseDate, currentDate)) {
            return true;
        } else {
            return false;
        }
    })


    async function deleteExercise(exerciseId) {
        const res = await axios.delete(`http://localhost:5000/api/workouts/deleteWorkout/${exerciseId}`, config)
        console.log('deleted exercise', res);
        const temp = exercises.filter(exercise => {
            if (exercise._id === exerciseId) {
                return false;
            } else {
                return true;
            }
        })
        setExercises(temp);

    }

    console.log('1', exercisesByDate)
    const copyExercises = async () => {
        var oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
        const lastWeeksExercises = exercises.filter(exercise => {
            if (compareDates(oneWeekAgo, new Date(exercise.date))) {
                return true;
            }
            return false;
        })
            .map(exercise => {
                exercise.date = new Date();

                return {
                    name: exercise.name,
                    date: exercise.date,
                    weight: exercise.weight,
                    reps: exercise.reps,
                    userId: exercise.userId
                };
            })
        const res = await axios.post('http://localhost:5000/api/workouts/copy', { exercises: lastWeeksExercises }, config)
        console.log('copied exercisses', res.data);
        setExercises([...exercises, res.data]);
    }

    return (

        <div>

            <NavigationBar />


            <Calendar
                onChange={setDate}
            />


            <table className='exTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {exercisesByDate.map(exercise => {
                        return (
                            <tr class='exerciseContainer'>
                                <td className='boxFont' style={{ color: 'orangered' }}>{exercise.name}</td>
                                <td className='boxFont' style={{ color: 'orangered' }}>{exercise.weight}</td>
                                <td className='boxFont' style={{ color: 'orangered' }}>{exercise.reps}</td>
                                <td className='deleteButton'><button onClick={() => deleteExercise(exercise._id)} >Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

            <br />
            <form className='enterData' onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Enter Exercise.." title="Type in a category" onChange={onChange} /><br />
                <input type="text" name="weight" placeholder="Enter Weight.." title="Type in a category" onChange={onChange} />
                <input type="text" name="reps" placeholder="Enter Reps.." title="Type in a category" onChange={onChange} />

                <button id="submitExercise" type="submit">submit</button>

            </form>


            <Alert setIsPrompt={setIsPrompt} copyExercises={copyExercises} isOpen={isOpen} setIsOpen={setIsOpen} />

        </div >



        //    <div>


        /* <NavigationBar />
    <form>
        <table>
            <tr>
               <th><label>Monday</label></th><th><label>Tuesday</label></th><th><label>Wednesday</label></th><th><label>Thursday</label></th><th><label>Friday</label></th><th><label>Saturday</label></th><th><label>Sunday</label></th>
            </tr>
            <tr>
        <td><select name = "Monday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Tuesday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Wednesday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Thursday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Friday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Saturday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
        <td><select name = "Sunday">
            <option value="None" selected>None</option><option value="Arms">Arms</option><option value="Back">Back</option><option value="Legs">Legs</option><option value="Shoulders">Shoulders</option><option value="Cardio">Cardio</option>
        </select></td>
</tr>
        </table>




    </form> */

        //    </div>
    );
}



export default Schedule;