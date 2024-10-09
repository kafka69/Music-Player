import React from "react";
import { Box, Container, Paper, Button, IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from '@mui/icons-material/Pause';
export default function Controls({playPreviousTrack,playNextTrack,isPlaying,togglePlay}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "88%",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "0 0 50px 50px",
        position: "absolute",
        bottom: "0px",
      }}
    >
      <Box>
        <IconButton aria-label="previous"
        onClick={playPreviousTrack}>
          <SkipPreviousIcon sx={{ fontSize: "30px" }} />
        </IconButton>
        <Button
          variant="contained"
          sx={{
            marginRight: "10px",
            marginLeft: "10px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            backgroundColor: "#A9A9A9",
          }}
          onClick={togglePlay}
        >
            {isPlaying ? (<PauseIcon sx={{ fontSize: "30px" }} />):(<PlayArrowIcon sx={{ fontSize: "30px" }} />)}
          
        </Button>
        <IconButton aria-label="next"
        onClick={playNextTrack}>
          <SkipNextIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
