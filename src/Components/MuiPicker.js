import React, { useState } from 'react'
import { Stack, TextField } from '@mui/material'
import {DatePicker, TimePicker, DateTimePicker} from '@mui/x-date-pickers'

const MuiPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [selectedDateTime, setSelectedDateTime] = useState(null)

   // console.log({ selectedTime: selectedTime && selectedTime.toLocaleTimeString() })
  return (

    <Stack spacing = {4} sx = {{ width: '250px'}}>
     <DatePicker
         label="Date Picker"
         value = { selectedDate}
         onChange={(newValue) => { setSelectedDate(newValue);}}
         renderInput={(params) => <TextField {...params} />}
       />
     <TimePicker
         label="Time Picker"
         value = { selectedTime}
         onChange={(newValue) => { setSelectedTime(newValue);}}
         renderInput={(params) => <TextField {...params} />}
       />
      <DateTimePicker
         label="Choose Time and Date"
         value = { selectedDateTime}
         onChange={(newValue) => { setSelectedDateTime(newValue);}}
         renderInput={(params) => <TextField {...params} />}
       />
    </Stack >


  )
}

export default MuiPicker