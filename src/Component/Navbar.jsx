import React from 'react'
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const Navbar = () => {
  return (

    <div><List style={{display:'flex'}}>
        
           <Box sx={{ flexGrow: 1 ,textAlign:'center',padding:'15px,5px'}}>
      <Grid container spacing={2} columns={16}>
       <Grid item xs={3}>
          <li>HOME</li>
        </Grid>
       <Grid item xs={3}>
          <li>ABOUT</li>
        </Grid>
       <Grid item xs={3}>
          <li>PROJECTS</li>
        </Grid>
       <Grid item xs={3}>
          <li>CODE</li>
        </Grid>
       <Grid item xs={3}>
          <li>CONTECT</li>
        </Grid>
      </Grid>
    </Box>
      </List></div>
  )
}

export default Navbar
