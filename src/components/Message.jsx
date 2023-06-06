import React from 'react'
import { Box, Typography } from '@mui/material'

export const Message = (props) => {

  const type = props.isUser ? 'row-reverse' : 'row';
  const backgroundColor = props.isUser ? 'white' : '#8da4f1';
  const color = props.isUser ? 'black' : 'white';
  const borderRadius = props.isUser ? '15px 0px 15px 15px' : '0px 15px 15px 15px';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: props.isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      paddingTop: '5px',
      paddingLeft: '10px',
    }}>
      <Box sx={{
        backgroundColor: { backgroundColor },
        marginBottom: '2px',
        maxWidth: '80%',
        gap: '15px',
        borderRadius: { borderRadius },
      }}>
        <Typography sx={{
          wordWrap: 'break-word',
          multiline: true,
          maxWidth: '80%',
          paddingLeft: "8px",
          paddingRight: "8px",
          fontSize: '16px',
          color: { color },
        }}>
          {props.message}
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
