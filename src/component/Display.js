import React from 'react';
import { Box, Container } from "@mui/material";

export default function Display({currentTrackName}) {
  return (
    <>
      <Box
        component="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
          `,
        }}
      />
      <Box
        sx={{
            height:"10px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          width: "88%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "50px 50px 0 0",
          position: "absolute",
          top: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <Box
          component="p"
          sx={{
            display: "inline-block",
            animation: "marquee 9s linear infinite",
            paddingLeft: "100%",
            width: "50%"
          }}
        >
          {currentTrackName}
        </Box>
      </Box>
    </>
  );
}

