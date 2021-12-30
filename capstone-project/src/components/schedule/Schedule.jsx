import React,{useState} from 'react';
import Button from '@mui/material/Button';
import "./Schedule.css";
import axios from 'axios';

//import { Login } from '@mui/icons-material';


function Schedule(props){
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
   
          return (
           <div>
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




               </form>

           </div>
          );
      }
      
  export default Schedule;