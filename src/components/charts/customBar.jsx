import React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function CustomBarChart() {
  const data = [
    { value: "248k", color: "#2b4c9a" }, 
    { value: "30k", color: "#5da8d4" }, 
    { value: "124k", color: "#d9534f" },
    { value: "89k", color: "#4c4f68" }, 
  ];

  return (
   <Box sx={{width:'360px',ml:'100px', mt:'20px'}}>
     <Box
      sx={{
        height:'120px',
        backgroundColor: "#3f4b75", 
        borderRadius: '15px',
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: item.color,
            flex: 1,
            height: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: index === 0 ? "8px 0 0 8px" : index === data.length - 1 ? "0 8px 8px 0" : 0, // Round corners for first and last boxes
            "&:not(:last-child)": {
              marginRight: 1, 
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
   </Box>
  );
}
