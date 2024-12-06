import React from 'react'
import { Typography } from "@mui/material";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { borderRadius } from '@mui/system';







export default function SignIn() {
    return (
        <>
            <Typography variant="body1" sx={styles.mailTitle}>
                SIGN IN TO YOUR ACCOUNT
                <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    sx={{ width: '90%', mt: '10px' }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    sx={{ width: '90%', mt: '10px' }}
                />
                <Button
                    variant="contained"
                    sx={{
                        mt: '20px',
                        backgroundColor: 'red',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: 'darkred',
                        },
                    }}
                >
                    Sign In
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderBottomLeftRadius:'15px',
                        borderBottomRightRadius:'15px',
                        mt:'30px',
                        width:'100%',
                        backgroundColor: '#4267B2', 
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#365899', 
                        },
                    }}
                >
                    Sign in with Facebook
                </Button>
            </Typography>

        </>
    )
}

const styles = {
    mailTitle: { width: '90%', maxWidth: 360, backgroundColor: '#3f4b75', color: '#ffffff', mt: '20px', mr: '100px', fontSize: '20px', pt: '30px', textAlign: 'center',borderRadius:'15px' }
}