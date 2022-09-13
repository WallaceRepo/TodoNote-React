import React from 'react'
import Task from './Task.js'


const Tasks = ({tasks, taskDelete, togglePriority}) => {
  
  return (
    <>
       {tasks.map( task => (
          <Task key = {task.id} 
          task = {task} 
          taskDelete = {taskDelete }
          togglePriority = {togglePriority }
          />  
       ))}
    </>
  )
}

export default Tasks