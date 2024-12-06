import { Fragment, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Menu from './components/menuBox/menu'
import Profile from './components/profilr/profile'
import Grid2 from '@mui/material/Grid2';
import Mail from './components/email/mail';
import PieAnimation from './components/charts/pie';
import SignIn from './components/signIn/signIn';
import WeatherChart from './components/charts/weather';
import Calendar from './components/calender/calender';
import CustomChart from './components/charts/customer';
import CustomBarChart from './components/charts/customBar';
import DonutChart from './components/charts/pie';
import WeatherForecast from './components/charts/weatherForCast';
import ShareButtons from './components/share/share';
import ProgressBars from './components/progress/progres';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system';

function App() {

  return (
    <Fragment>
      <Box sx={{backgroundColor:'#7585b5'}}>
        <Navbar />
        <Grid2 container spacing={2} columns={3}  >
          <Grid2 size={1} >
            <Menu />
            <DonutChart />
            <CustomChart />
            <CustomBarChart />



          </Grid2>
          <Grid2 size={1}>
            <Profile />
            <WeatherChart />
            <WeatherForecast />
            <ShareButtons />
            <Typography variant="body1" color="initial" sx={{ width: '440px', backgroundColor: '#3f4b75', color: 'white', fontSize: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '120px', mt: '20px', mx: 'auto', borderRadius: '15px' }} >
              Coded By : FARNAZ DARVISH
            </Typography>

          </Grid2>
          <Grid2 size={1}>
            <Mail />
            <SignIn />
            <Calendar />
            <ProgressBars />

          </Grid2>
        </Grid2>
      </Box>



    </Fragment>
  )
}

export default App
