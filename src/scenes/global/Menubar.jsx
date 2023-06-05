import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BallotIcon from '@mui/icons-material/Ballot';
import HeadphonesIcon from '@mui/icons-material/Headphones';


function Menubar() {

  const [selected, setSeleced] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <Box>
      <BottomNavigation 
        sx={{width: '100%', position: 'absolute', bottom: 0}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" to="/" component={Link} icon={<HomeIcon />}/>
        <BottomNavigationAction label="Diary" to="/diary" component={Link} icon={<CalendarTodayIcon />}/>
        <BottomNavigationAction label="Mission" to="/mission" component={Link} icon={<BallotIcon />}/>
        <BottomNavigationAction label="Meditation" to="/meditation" component={Link} icon={<HeadphonesIcon />}/>
      </BottomNavigation>
    </Box>
  )
}

export default Menubar