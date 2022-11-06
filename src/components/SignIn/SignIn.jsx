import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Link,Button,TextField,FormControlLabel,Checkbox} from '@material-ui/core';
import { postData, LogInpostData } from '../Shared/Server';
import useStyles from './../Products/styles';
import setLocalStorage from '../Shared/LocalStorage';
import setLocalToken from '../Shared/LocalStorage';

const SignIn = ({error}) =>{
    
    const classes = useStyles();
    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        var param = JSON.stringify({
            "Password": data.get('password'),
            "UserName": data.get('email')
          });
        // const param = {
        //     UserName: data.get('email'),
        //     Password: data.get('password')
        // };
        event.preventDefault();
        var datas = LogInpostData("api/Users/LogIn", param);
      };
 return(
<>
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
             <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item>
                    <Link style={{cursor: "pointer"}} href="/SignUp" >
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
        </Grid>
    </main>
 </>
 );   
};

export default SignIn;