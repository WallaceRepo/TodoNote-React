import React from 'react'
import { useState, useEffect} from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'

const TaskDetail = () => {

  const [loading, setLoading] = useState(true )
  const [task, setTask] = useState({})
  const [error, setError] = useState(null)

  const params = useParams()

  useEffect(() => {
    const fetchTask = async ()=> { 
    const res = await fetch(`http://localhost:5000/tasks/${params.id}`) 

    const data = await  res.json()

    if( res.status === 404) {
      setError('Taks not found')
    }
    setTask(data)
    setLoading(false)
  } 
  fetchTask()
  })
  if(error) {
    return <Navigate to="/" />
  }
  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <h3>{task.todo}</h3>
      <p>{task.day}</p>
      <p>{task.id}</p>
      <Link to="/">Go back</Link>
    </div>
    )
  }


export default TaskDetail