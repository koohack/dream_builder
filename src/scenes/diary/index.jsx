import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { Chat } from "../../components/Chat"
import { Search } from "../../components/Search"

function Diary() {

  const [selectedDate, setSelectedDate] = React.useState(dayjs());


  return (
    <Box sx={{
      backgroundColor: '#a7bcff',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    }}> 

      {/* TODO: calendar design */}
      <Box sx={{
        border: '1px solid white',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{

        }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{
            flex: 1,
          }}/>
        </LocalizationProvider>
        </Box>
        
        <Box sx={{

        }}>
          <Search />
          <Chat />
        </Box>

      </Box>
      
      

      

    </Box>
    
  )
}

export default Diary