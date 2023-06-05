import React from 'react'
import { Box, Typography } from '@mui/material'

export const Message = (data, isUser) => {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '5px',
      paddingLeft: '10px',
    }}>
      
      <Box sx={{
        className: 'messageContent',
        backgroundColor: 'white',
        marginBottom: '2px',
        maxWidth: '80%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        borderRadius: '0px 15px 15px 15px',
      }}>
        <Typography variant="h6" sx={{
          wordWrap: 'break-word',
          paddingLeft: "10px",
          maxWidth: '80%',
        }}>
          Hellogreagaekjrgjkeabrjgbaebbkjeragjk;baerk;jbvbraevbergbae
        </Typography>
      </Box>
      
      <Box sx={{
        className: 'messageTime',
      }}>
        <Typography sx={{
          color: 'gray',
          fontWeight: 300,
        }}>
          12:00
        </Typography>
      </Box>
    </Box>
  )
}
