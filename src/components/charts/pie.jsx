import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "iOS", value: 21, color: "#f44336" },
  { name: "Mac", value: 48, color: "#26c6da" }, 
  { name: "Linux", value: 9, color: "#ffc107" }, 
  { name: "Win", value: 32, color: "#1976d2" }, 
];

const summaryData = [
  { name: "iOS", value: "21%", color: "#f44336" },
  { name: "Mac", value: "48%", color: "#26c6da" },
  { name: "Linux", value: "9%", color: "#ffc107" },
  { name: "Win", value: "32%", color: "#1976d2" },
];

export default function DonutChart() {
  return (
    <Box sx={{width:'360px',ml:'100px', mt:'20px'}}>
      <Box
      sx={{
        backgroundColor: "#3f4b75",
        borderRadius: 4,
        p: 4,
        color: "#fff",
        maxWidth: 500,
        mx: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        OS AUDIENCE STATS
      </Typography>

      <Box sx={{ position: "relative", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius="60%"
              outerRadius="80%"
              paddingAngle={5}
              startAngle={90}
              endAngle={450}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            JUNE
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#b0bec5" }}>
            2013
          </Typography>
        </Box>
      </Box>

      <Grid2 container spacing={2} mt={4}>
        {summaryData.map((item, index) => (
          <Grid2 item xs={3} key={index}>
            <Box
              sx={{
                backgroundColor: item.color,
                textAlign: "center",
                borderRadius: 2,
                p: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#fff", fontWeight: "bold" }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#fff" }}>
                {item.value}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
    </Box>
  );
}
