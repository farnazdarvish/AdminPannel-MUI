import React from 'react'
import { Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { borderRadius } from '@mui/system';







export default function Mail() {
    return (
        <>
            <Typography variant="body1" sx={styles.mailTitle}>
            JOIN THE NEWSLETTER
                <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    sx={{ width: '90%', mt: '10px' }}
                />
                <Button variant="contained" color="primary" sx={{mt:'20px'}}>
                    Subscribe
                </Button>
            </Typography>

        </>
    )
}

const styles = {
    mailTitle: { width: '90%', maxWidth: 360, height: '200px', backgroundColor: '#3f4b75', color: '#ffffff', mt: '20px', mr: '100px', fontSize: '20px', pt: '30px', textAlign: 'center',borderRadius:'15px' }
}