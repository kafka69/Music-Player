import React from 'react'
import { Box, Container, Paper, Button, IconButton } from '@mui/material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export default function SongCard({key,title, onClick,isActive}) {
  return (
    <Paper
      sx={{
        backgroundColor: isActive?'#7d00bc' :'#E6E6FA',
        color:isActive?"white":"black",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        cursor:"pointer"
      }}
      onClick={onClick}
    >
      <IconButton aria-label="pause" size="small">
        {isActive? (<HeadphonesIcon sx={{color:"white"}}/>):(<PauseCircleIcon />)}
      </IconButton>
      <Box sx={{ ml: 2 }}>
        {title}
      </Box>
    </Paper>
  )
}
