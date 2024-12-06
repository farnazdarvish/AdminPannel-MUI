import React from "react";
import { Grid2, Typography, Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function WeatherWithIcons() {
  return (
    <Box sx={{width:'440px', backgroundColor:'#3f4b75', mt:'20px', height:'100px',color:'white',borderRadius:'15px'}}>
         <Grid2 container spacing={4} sx={{display:'flex', justifyContent:'center',height:'100%',alignItems:'center'}}>
      <Grid2 item>
        <WbSunnyIcon sx={{ fontSize: 50, color: "#FFB300" }} />
      </Grid2>
      <Grid2 item>
        <Typography variant="h4">27°C</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Sunny
        </Typography>
      </Grid2>
    </Grid2>
    </Box>
   
  );
}
