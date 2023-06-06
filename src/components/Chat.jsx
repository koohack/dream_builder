import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { Message } from "./Message"

import { chattingData } from '../data/chattingData'



export const Chat = () => {

  const [data, setData] = React.useState(chattingData);

  function makeMessage(data) {
    var store = [];
    for (var i = 0; i < data.length; i++) {
      store.push(<Message message={data[i].message} isUser={data[i].isUser}/>);
    }
    return store;
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ddddf7',
    }}>
      {makeMessage(data)}
    </Box>
  )
}
