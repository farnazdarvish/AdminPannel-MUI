import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Img from '/img.jpeg'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


const btnStyle = {
  btn: { width: '100px', fontSize: '30px', borderTop: 3, color: 'white' }

}


export default function Profile() {
  return (
    <>
      <Stack sx={{ display: 'felex', flexWrap: 'wrap', justifyContent: 'center', bgcolor: '#3f4b75', width: '440px', mt: '20px' ,borderRadius:'15px'}} >
        <Avatar
          alt="Remy Sharp"
          src={Img}
          sx={{ mt:'20px', width: 200, height: 200 }}
        />
        <Typography variant="body1" sx={{width:'100%',textAlign:'center',fontSize:'40px',color:'white',my:'20px'}}>
          Farnaz Darvish
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100px',mt:'20px' }} >

          <ButtonGroup variant="text" aria-label="Basic button group" sx={{ height: '100px' }}>
            <Button sx={btnStyle.btn} >23</Button>
            <Button sx={btnStyle.btn}>841</Button>
            <Button sx={btnStyle.btn}>49</Button>
          </ButtonGroup>
        </Box>

      </Stack>

    </>
  );
}
