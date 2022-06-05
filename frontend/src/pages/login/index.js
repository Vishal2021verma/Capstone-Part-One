import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function loginFun() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter email" variant="outlined" type="email"   />
      <br/>
      <TextField id="outlined-basic" label="Enter password" variant="outlined" type="password" />
      <Button variant="contained">Login</Button>
    </Box>
  );
}