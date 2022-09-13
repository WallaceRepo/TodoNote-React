import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Task = ({task, taskDelete, togglePriority}) => {
  return (
    <div 
    className= { `task ${task.priority ? 'reminder' : ''}`} 
    onDoubleClick={ () => togglePriority(task.id)}>

        <h3 >{task.todo} < FaTimes style = {{color: 'red', cursor: "pinter"}} 
        onClick = { ()=> taskDelete(task.id)} /></h3>
        <p>{task.day}</p>
        <p><Link to={`/task/${task.id}`}>View Details</Link></p>
       
        
    </div>
)}

export default Task