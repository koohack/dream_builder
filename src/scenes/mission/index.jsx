import React from 'react'
import { Box } from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Calendar } from 'react-github-contribution-calendar';

function Mission() {
  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  return (
    <Box sx={{
      // display: 'flex', 
      // justifyContent: 'center', 
      // alignItems: 'center'
    }}>

      {/* TODO: use github calendar */}
      <Box sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </Box>
      
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        
      </Box>

      

    </Box>
  )
}

export default Mission