import React from "react";
import { Box, Grid2, Typography } from "@mui/material";

const forecastData = [
  { day: "SAT", date: "29/06", temp: "25°" },
  { day: "SUN", date: "30/06", temp: "22°" },
  { day: "MON", date: "01/07", temp: "24°" },
  { day: "TUE", date: "02/07", temp: "26°" },
  { day: "WED", date: "03/07", temp: "27°" },
  { day: "THU", date: "04/07", temp: "29°" },
];

export default function WeatherForecast() {
  return (
    <Box sx={{mt:'20px'}}>
        <Box
      sx={{
        backgroundColor: "#3f4b75", 
        borderRadius: 4,
        overflow: "hidden",
        maxWidth: 300,
        mx: "auto",
      }}
    >
      <Box sx={{ backgroundColor: "#d9534f", p: 2, textAlign: "center" }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Cluj-Napoca/RO
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#fff", mt: 1, fontSize: "14px" }}
        >
          FRI 29/06
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          24° <Box sx={{ width: 24, height: 24, border: "2px solid #fff" }} />
        </Typography>
      </Box>

      <Box sx={{ backgroundColor:"#3f4b75" }}>
        {forecastData.map((item, index) => (
          <Grid2
            key={index}
            container
            sx={{
              borderBottom:
                index !== forecastData.length - 1 ? "1px solid #444" : "none",
              alignItems: "center",
              px: 2,
              py: 1.5,
            }}
          >
            <Grid2 item xs={6}>
              <Typography
                variant="body2"
                sx={{
                  color: "#b0bec5",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {item.day} {item.date}
              </Typography>
            </Grid2>
            <Grid2
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                {item.temp}
              </Typography>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  border: "2px solid #b0bec5",
                  borderRadius: "50%",
                }}
              />
            </Grid2>
          </Grid2>
        ))}
      </Box>
    </Box>
    </Box>
  );
}
