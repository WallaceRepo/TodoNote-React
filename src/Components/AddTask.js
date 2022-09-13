import React from 'react'
import { useState } from 'react'

import { LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Stack, TextField } from '@mui/material'
import {DateTimePicker} from '@mui/x-date-pickers';


const AddTask = ({onAdd }) => {
    const [todo, setTodo] = useState('')
    const [day, setDay] = useState('')
    const [priority, setPriority] = useState(false)

    // const [selectedDateTime, setSelectedDateTime] = useState(null)
   // console.log({ selectedDateTime: day && day.toLocaleString() })

    const onSubmit = (e)=> {
        e.preventDefault()
        if( !todo) {
            alert('please add todo')
            return
        }
        onAdd({todo, day, priority})
        setTodo('')
        setDay(null)
        setPriority(false)
    }
    const handler = newValue => {
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }
        const format = newValue.toLocaleString('en-US', options)
        setDay(format)
    }
  return (
    <form className='add-form' onSubmit = { onSubmit}>
        <div className='form-control'>
            <label>Todo</label>
            <input type = 'text' placeholder='Add task' value={todo} 
            onChange={(e) => setTodo(e.target.value)} />
        </div>
        {/* <div className='form-control '>
         
            <label>Day time</label>
            <input type = 'text' placeholder='Add day & time' 
            value={day} onChange={ (e)=> setDay( e.target.value)} />
        </div> */}
        <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing = {2} sx = {{ width: '300px'}}>
                    <DateTimePicker
                        label="Date Time Picker"
                        value = { day }
                         onChange={(newValue) => { handler(newValue);}}
                         renderInput={(params) => <TextField {...params} />}
                       
                     />
                   
                  </Stack>
            </LocalizationProvider>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Priority</label>
            <input type = 'checkbox' 
            value={priority} 
            checked = { priority }
            onChange = { (e) => setPriority(e.currentTarget.checked)}/>
        </div>
     
        <input type = 'submit' value ='Save Task' className ='btn btn-block' />

    </form>
   
  )
}

export default AddTask