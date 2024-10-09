import React from 'react'
import { Box, Container, Paper, Button, IconButton } from '@mui/material';
import SongCard from './SongCard';
import Controls from './Controls';
import Display from './Display';
import useMusicPlayer from '../hooks/usePlayerProvider';
export default function Phone() {
    const {
        playTrack,
        togglePlay,
        currentTrackName,
        trackList,
        isPlaying,
        currentTrackIndex,
        playPreviousTrack,
        playNextTrack,
      } = useMusicPlayer();
    const songs = [
        { title: 'Cold Gin', artist: 'Kiss' },
        { title: "heaven's On Fire", artist: 'Kiss' },
        { title: 'Beth', artist: 'Kiss' },
      ];
  return (
    <Paper
      sx={{
        width: '300px',
        height: '500px',
        borderRadius: '50px',
        backgroundColor: '#D8BFD8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.5)',
        position: 'relative',
      }}
    >
        <Display currentTrackName={currentTrackName}/>
      <Box sx={{ flexGrow: 1, width: '100%', mt: 10 }}>
        {trackList.map((track, index) => (
          <SongCard key={index} title={track.name} onClick={() => playTrack(index)} isActive={index === currentTrackIndex}/>
        ))}
      </Box>
      <Controls togglePlay={()=>togglePlay()} playPreviousTrack={()=>playPreviousTrack()} playNextTrack={()=>playNextTrack()} isPlaying={isPlaying}/>
    </Paper>
  )
}
