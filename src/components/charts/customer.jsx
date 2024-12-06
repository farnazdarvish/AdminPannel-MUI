import React from "react";
import { Box, Grid2, Button, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Apr", value: 10 },
  { name: "May", value: 20 },
  { name: "Jun", value: 30 },
];


export default function CustomChart() {
  return (
    <Box sx={{width:'300px',ml:'100px', mt:'20px'}}>
          <Box
      sx={{
        backgroundColor: "#3f4b75",
        borderRadius: 4,
        p: 4,
        color: "#fff",
        width: "100%",
        maxWidth: 600,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2d9c9e",
          borderRadius: 4,
          p: 2,
          mb: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            right: "20px",
            top: "10px",
            backgroundColor: "#4c5a67",
            borderRadius: "8px",
            px: 1,
            color: "#fff",
            fontSize: "12px",
          }}
        >
          +23%
        </Typography>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#fff" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fill: "#fff" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#4c5a67",
                border: "none",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
              dot={{ fill: "#fff", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Grid2 container spacing={1} justifyContent="center" mb={2}>
        {["Week", "Month", "Year"].map((period) => (
          <Grid2 item key={period}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1d2849",
                color: "#fff",
                textTransform: "none",
                borderRadius: 2,
                "&:hover": { backgroundColor: "#3b4550" },
              }}
            >
              {period}
            </Button>
          </Grid2>
        ))}
      </Grid2>

      <Box>
        {[
          { month: "APR", year: 2013, percent: "21%" },
          { month: "MAY", year: 2013, percent: "48%" },
          { month: "JUN", year: 2013, percent: "35%" },
        ].map((item) => (
          <Grid2
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            key={item.month}
          >
            <Typography variant="body2" sx={{ color: "#b0b8c2" }}>
              {item.month} {item.year}
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              {item.percent}
            </Typography>
          </Grid2>
        ))}
      </Box>
    </Box>

    </Box>
  );
}
