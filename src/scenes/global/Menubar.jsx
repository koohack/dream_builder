import React from 'react'
import { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BallotIcon from '@mui/icons-material/Ballot';
import HeadphonesIcon from '@mui/icons-material/Headphones';


function Menubar() {

  const [selected, setSeleced] = useState(0);
  const [ value, setValue ] = useState(0);

  return (
    <BottomNavigation 
      sx={{width: '100%', position: 'absolute', bottom: 0}}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
      <BottomNavigationAction label="Diary" icon={<CalendarTodayIcon />}/>
      <BottomNavigationAction label="Mission" icon={<BallotIcon />}/>
      <BottomNavigationAction label="Meditation" icon={<HeadphonesIcon />}/>
    </BottomNavigation>
  )
}

export default Menubar