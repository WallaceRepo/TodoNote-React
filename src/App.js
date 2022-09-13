import Header from './Components/Header';
import Footer from './Components/Footer';
import Tasks from './Components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './Components/AddTask';
import About from './Components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskDetail from './Components/TaskDetail';

// This app uses an react-router-dom 6.0.2 
function App() {
  const [showAddButton, setShowAddButton] = useState(false)
 const [tasks, setTasks] = useState ([]) 

 useEffect(()=>{
      const getTasks = async()=> {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
 },[])


 // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
      }

// Post Task
 const addTask = async (task) => {
     const res = await fetch('http://localhost:5000/tasks',
          {
            method: "POST",
            headers: { 'Content-type':'application/json'},
            body: JSON.stringify(task)
          })
      const data = await res.json()
      setTasks([...tasks, data])
 }
//  const addTask = (task) => {
//    const id = Math.floor(Math.random() * 10000)+1
//    const newTask = {id, ...task}
//    setTasks([...tasks, newTask ])
//  }
 const taskDelete = async (id) => {
       await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
       })
       setTasks ( tasks.filter( task =>  task.id !== id))
       
 }
 // Update or Toggle Task 
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}
 const togglePriority = async (id) => {
       const taskToToggle = await fetchTask(id)
       const updatedTask = {...taskToToggle, priority: !taskToToggle.priority}

       const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json'},
          body: JSON.stringify(updatedTask)
       })
       const data = await res.json()
       setTasks(tasks.map((task) => task.id === id ? {...task, priority: data.priority} : task))
       //setTasks(tasks.map((task) => task.id === id ? {...task, priority: !task.priority} : task))
 }

  return (
    <BrowserRouter>
   
      <div className='container'>
 
       <Header onAddButton = {() => setShowAddButton(!showAddButton)} showAddButton={showAddButton}/> 
       <Routes>
          <Route path="/" element = {
               <>
                {showAddButton &&  <AddTask onAdd = {addTask }/> }  
                { tasks.length > 0 ? (
                <Tasks tasks = {tasks} taskDelete = {taskDelete} togglePriority = {togglePriority} 
                    /> ): "No tasks to do" }
               </>
             }
            />
          <Route path="/about" element={<About />} />
          <Route path = "/task/:id" element={<TaskDetail />} />
       </Routes> 
     
       <Footer />
       </div>
   
      </BrowserRouter> 
  );
}

export default App;
