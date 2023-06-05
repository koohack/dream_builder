import React from 'react'
import { useRef, useEffect } from 'react';
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
import { TextInput } from "../../components/TextInput"
import Menubar from '../global/Menubar';

function Diary() {

  const [selectedDate, setSelectedDate] = React.useState(dayjs());

  const scroll = useRef(null);
  var realScroll = null;

  useEffect(() => {
    realScroll = scroll.current;
    realScroll.scrollTop = realScroll.scrollHeight;
  }, []);
  
  
  return (
    <Box sx={{
      backgroundColor: '#a7bcff',
      weight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}> 

      {/* TODO: calendar design */}
      <Box sx={{
        border: '1px solid white',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar sx={{
            border: '1px solid blue',
            height: '32vh',
            weight: '100%',
          }}/>
        </LocalizationProvider>
      </Box>
      
      {/* search component*/}
      <Box sx={{
        border: '1px solid green',
      }}>
        <Search />
      </Box>
      
      {/* chat component*/}
      <div id="chatContainer" >
      <Box ref={scroll} sx={{
        className: 'chatContainer',
        border: '1px solid red',
        height: '43vh',
        overflow: 'scroll',
        padding: '10px',
      }}>
        <Chat />  
      </Box>
      </div>

      <Box sx={{
        border: '1px solid yellow',
      }}>
        <TextInput sx={{
          height: '11vh',
        }}/>
      </Box>
      
    </Box>
  )
}

export default Diary