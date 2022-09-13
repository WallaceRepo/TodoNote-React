import React from 'react'
import { LocalizationProvider} from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import MuiPicker from './MuiPicker';


const DatePicker = () => {
  return (
    <LocalizationProvider dateAdapter = { AdapterDateFns }>
      <div>
        <MuiPicker />
     
      </div>
        
    </LocalizationProvider>
  )
}

export default DatePicker