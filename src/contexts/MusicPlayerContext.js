import React, { useState } from "react";
import Track1 from "../tracks/nightfall-future-bass-music-228100.mp3";
import Track2 from "../tracks/twilight-hustle-241484.mp3";
import Track3 from "../tracks/whip-afro-dancehall-music-110235.mp3";
const MusicPlayerContext = React.createContext();
const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "nightfall future - Bass",
        file: Track1,
      },
      {
        name: "twilight hustle - Jazz",
        file: Track2,
      },
      {
        name: "whip afro dancehall - Jazz",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };