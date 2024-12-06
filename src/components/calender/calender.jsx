import * as React from "react";
import dayjs from "dayjs";
import Grid2 from "@mui/material/Grid2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";

const today = dayjs();
const twoPM = dayjs().set("hour", 14).startOf("hour");
const threePM = dayjs().set("hour", 15).startOf("hour");

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid2
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        columns={{ xs: 1, sm: 2 }}
      >
        <Grid2 item xs={12} sm={6} sx={{backgroundColor:'#3f4b75',mt:'20px',mr:'100px',width:'500px',color:'white',borderRadius:'15px'}}>
          <DateCalendar defaultValue={today} disableFuture />
        </Grid2>
        <Grid2 item xs={12} sm={6} sx={{backgroundColor:'#3f4b75',mr:'100px',width:'500px',borderRadius:'15px'}}>
          <TimeClock defaultValue={twoPM} maxTime={threePM} />
        </Grid2>
      </Grid2>
    </LocalizationProvider>
  );
}
