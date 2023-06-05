import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '10px',
    }}>
      <TextField label="Search" variant="standard" fullWidth/>
      <SearchIcon />
    </Box>
   
  )
}
