import React,{useState} from 'react';
import Button from '@mui/material/Button';
import "./Schedule.css";
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import NavigationBar from '../navigationbar/NavigationBar';
import Calendar from 'react-calendar';
import Alert from '../alert/Alert';


//import { Login } from '@mui/icons-material';

var selectedMonth;
var selectedDate;
var selectedDay;
var selectedYear;
var newExercise = [];
var newDisplayE = [];
var display = false;
function Schedule(props){
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    console.log("***********************************")
    console.log(props)
    

    const [value, onChange] = useState(new Date());
    const [newDisplayExercises, changeList] = useState({
        "exercise": "",
        "month": "",
        "date": "",
        "year": "",
        "weight": ""
    });

    function sendDates(value){
        selectedDate = value.getDate();
        selectedYear = value.getYear() + 1900;

        switch(value.getDay()){
            case 0:
                selectedDay = "Sunday";
                break;
                case 1:
                selectedDay = "Monday";
                break;
                case 2:
                selectedDay = "Tuesday";
                break;
                case 3:
                selectedDay = "Wednesday";
                break;
                case 4:
                selectedDay = "Thursday";
                break;
                case 5:
                selectedDay = "Friday";
                break;
                case 6:
                selectedDay = "Saturday";
                break;
        }

        switch(value.getMonth()){
            case 0:
                selectedMonth = "January";
                break;
                case 1:
                selectedMonth = "February";
                break;
                case 2:
                selectedMonth = "March";
                break;
                case 3:
                selectedMonth = "April";
                break;
                case 4:
                selectedMonth = "May";
                break;
                case 5:
                selectedMonth = "June";
                break;
                case 6:
                selectedMonth = "July";
                break;
                case 7:
                selectedMonth = "August";
                break;
                case 8:
                selectedMonth = "September";
                break;
                case 9:
                selectedMonth = "October";
                break;
                case 10:
                selectedMonth = "November";
                break;
                case 11:
                selectedMonth = "December";
                break;
                default:
                selectedMonth = "";
                break;

        }
    }

    function addExercise(exerciseAdded, weightAdded){
        let exerciseArray = {
            "exercise": exerciseAdded,
            "month": selectedMonth,
            "date": selectedDate,
            "year": selectedYear,
            "weight": weightAdded

        }
        newExercise.push(exerciseArray)

    }


    function newList(){
        //changeList(newDisplayExercises = []);
        newDisplayE = [];
        for(var x=0;x < newExercise.length;x++){
        if(display === true && newExercise[x].date===selectedDate && newExercise[x].month === selectedMonth && newExercise[x].year === selectedYear){
           // changeList(newDisplayExercises.push(newExercise[x].exercise))
            newDisplayE.push(newExercise[x].exercise + " : "+newExercise[x].weight)
            console.log(newExercise[x].exercise)
        }
        console.log(selectedDate)
        console.log(selectedMonth)
        console.log(selectedYear)
        console.log(changeList)


    }
    changeList(newDisplayE);
    console.log(newDisplayExercises)
    if(display === false){
        console.log("False");
        changeList("");


    }

    console.log(display)


}

function onClickCalls(enterEx, enterW){
    display = true
    newDisplayE=[];
    changeList(newDisplayE);

    addExercise(enterEx, enterW);
    newList();

}

function onCalendarClick(){
    display = false
    console.log("log")
    changeList([""]);
    newList();

}


   
          return (

            <div>
                
                <NavigationBar />

                <table>
                    <tr>
                        <td>
            <Calendar
              onChange={onChange}
              value={value}
              onClickDay={(value => sendDates(value))}
              onClick={()=>onCalendarClick()}
            />
            </td>
            <td>
            <div class='exerciseFont'> <h1>{selectedDay} {selectedMonth} {selectedDate}, {selectedYear}</h1> </div> <br/>
                <hr/>
                {newDisplayE.map(eList =>{
                    return(
                       <div class='exerciseFont'> <h2>{eList}</h2> </div>
                    )
                })}
                <br/>
                <input type="text" id="enterExercise" placeholder="Enter Exercise.." title="Type in a category"></input><br/>
                <input type="text" id="enterWeight" placeholder="Enter Weight.." title="Type in a category"></input>
                <button id="submitExercise" onClick={()=>onClickCalls(document.getElementById("enterExercise").value, document.getElementById("enterWeight").value)}>submit</button>


            </td>
            </tr>
            </table>
          </div>



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