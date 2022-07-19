import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import WelcomeMessage from './WelcomeMessage';
import { Button, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export default function ButtonAppBar() {

  const [position, setPosition] = useState("Full-stack Developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])
  
  const onPositionChange = (event: SelectChangeEvent<string>) => {
    setPosition(event.target.value)
  }
  return (
      <AppBar position="static">
        <Toolbar>
          <Box display='flex' justifyContent='space-between' alignItems='center' width={1} py={2}>
            <Typography variant='h6'>My movies</Typography>
            <Box textAlign="center">
              <WelcomeMessage position={position} />
              <Box mt={1}>
                <FormControl>
                  <Select value={position} onChange={onPositionChange} style={{ color: "white"}}>
                    <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                    <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                    <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box textAlign="center">
              <Box my={1}>
                <Typography variant="h6">{time.toUTCString()}</Typography>
              </Box>
              <Button variant="contained">Login</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
  );
}