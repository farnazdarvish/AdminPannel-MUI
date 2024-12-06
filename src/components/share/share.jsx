import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function ShareButtons() {
  const buttons = [
    { text: "SHARE TO FACEBOOK", color: "#3b5998" }, 
    { text: "SHARE TO TWITTER", color: "#1da1f2" }, 
    { text: "SHARE TO GOOGLE+", color: "#db4437" }, 
  ];

  return (
    <Box sx={{mt:'20px'}}>
        <Box
      sx={{
        backgroundColor: "#3f4b75", 
        padding: 2,
        borderRadius: '15px',
        width: "100%",
        maxWidth: 400,
        mx: "auto", 
      }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          fullWidth
          sx={{
            backgroundColor: button.color,
            color: "#fff",
            textTransform: "none", 
            fontSize: "16px",
            fontWeight: "bold",
            mb: 2, 
            borderRadius: 2,
            "&:hover": {
              backgroundColor: button.color,
              opacity: 0.9, 
            },
          }}
        >
          {button.text}
        </Button>
        
      ))}
      
    </Box>
    </Box>
  );
}
