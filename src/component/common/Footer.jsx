import React from 'react';
import { Typography, Grid, Button } from '@mui/material';

const Footer = () => {
  return (
    <div>
      <Grid
        className='bg-black text-white text-center mt-10'
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant='h6'>Company 1</Typography>
          <div>
            <Button variant='contained'>About</Button>
          </div>
          <div>
            <Button variant='contained'>Blog</Button>
          </div>
          <div>
            <Button variant='contained'>Press</Button>
          </div>
          <div>
            <Button variant='contained'>Jobs</Button>
          </div>
          <div>
            <Button variant='contained'>Partners</Button>
          </div>
        </Grid>

        {/* Repeat the above structure for other grid items with unique content */}
        
      </Grid>
    </div>
  )
}

export default Footer;
