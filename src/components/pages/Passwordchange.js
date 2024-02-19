import {  CssBaseline, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

const Password = () => {
  
  return <>
    <CssBaseline />
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1 style={{justifyContent:'center'}}> Change Password</h1> 
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
  </>;
};

export default Password;
