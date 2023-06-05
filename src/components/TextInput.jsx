import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Box, Typography, TextField, Button } from '@mui/material'

export const TextInput = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      ailgnItems: 'center',
      flexDirection: 'row',
      padding: '10px',
    }}>
      <TextField label="Your daily" variant="standard" fullWidth sx={{paddingRight: "5px"}}/>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Box>
  )
}
