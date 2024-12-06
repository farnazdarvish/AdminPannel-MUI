import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

export default function ProgressBars() {
  const progressData = [
    { label: "Downloading...", value: 81, color: "#26c6da" }, 
    { label: "Uploading...", value: 43, color: "#5da8d4" }, 
  ];

  return (
    <Box
      sx={{
        mr:'100px',
        mt:'20px',
        height:'105px',
        backgroundColor: "#3f4b75", 
        borderRadius: '15px',
        p: 4,
        width: "300px",
        maxWidth: 400,
      }}
    >
      {progressData.map((item, index) => (
        <Box key={index} sx={{ mb: 3 }}>
         
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              {item.label}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              {item.value}%
            </Typography>
          </Box>

         
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 10,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                backgroundColor: item.color,
              },
              backgroundColor: "#4c4f68", 
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
