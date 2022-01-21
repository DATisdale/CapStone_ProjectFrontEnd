import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter, Link } from "react-router-dom";
import Schedule from '../schedule/Schedule';
import "./Exerciselist.css"
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, } from '../NavbarElements'
import NavigationBar from '../navigationbar/NavigationBar';
import Searchbar from '../searchbar/Searchbar';
import ReactPaginate from 'react-paginate';


let configObject = {
    headers: {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "af2dbdd3c1msh5d755e1bc1b3c58p1774e0jsn551b477f9881"
    }
}

const itemsPerPage = 10;

const Exerciselist = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    const [targetMuscles, setTargetMuscles] = useState([]);
    const [selectedMuscle, setSelectedMuscle] = useState('');
    const [exercisesByMuscle, setExercisesByMuscle] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setExercisesByMuscle(exercisesByMuscle.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(exercisesByMuscle.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Only need to run once to populate the dropdown
    useEffect(() => {
        const getTargetMuscles = async () => {
            let response = await axios.get('https://exercisedb.p.rapidapi.com/exercises/targetList', configObject)
            console.log(response.data);
            setTargetMuscles(response.data);

        }
        getTargetMuscles();
    }, []);

    // Fetch the exercises by muscle type every single time the user selects a different value in the dropdown
    useEffect(() => {
        const getExercisesByMuscle = async () => {
            console.log('grabbing muscles by exercise now...')
            let response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/target/${selectedMuscle}`, configObject)
            console.log(response.data);
            setExercisesByMuscle(response.data);

        }
        if (selectedMuscle.length > 0) {
            getExercisesByMuscle();
        }

    }, [selectedMuscle]);


    console.log('Muscles by exercise', exercisesByMuscle)
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % exercisesByMuscle.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (

        <div>
            <NavigationBar />
            <Link to={{
                pathname: "/Schedule",
                state: { eList: "listOfExercises" }
            }} >
                <button >Make Your Schedule</button>
            </Link><br /><br /><br />
            {/* <Searchbar /> */}

            <select onChange={(e) => setSelectedMuscle(e.target.value)}>
                <option selected disabled>Choose Target Muscle</option>
                {targetMuscles.map(muscle => (
                    <option value={muscle}>{muscle.slice(0, 1).toUpperCase() + muscle.slice(1)}</option>
                ))}
            </select>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={exercisesByMuscle.length / itemsPerPage}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"

            />
            <section className="exerciseList">


                {exercisesByMuscle.slice(itemOffset, itemOffset + itemsPerPage).map(exercise => {
                    return (
                        <div key={exercise.id} className="exerciseContainer">
                            <img src={exercise.gifUrl} className="exerciseGif" />
                            <p>{exercise.name.slice(0, 1).toUpperCase() + exercise.name.slice(1)}</p>
                        </div>
                    )
                })}
            </section>

        </div>
    )


}


export default Exerciselist;