import logo from "./logo.svg";
import "./App.css";
import { Box, Container, Paper, Button, IconButton } from "@mui/material";
import Phone from "./component/Phone";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
function App() {
  return (
    <MusicPlayerProvider>
    <div
      style={{
        backgroundColor: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {" "} */}
      <Container
        maxWidth="sm"
        sx={{
          height: '100vh',
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <Phone />
      </Container>
    </div>
    </MusicPlayerProvider>
  );
}

export default App;
