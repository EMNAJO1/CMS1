import React from 'react'
import {Link} from "react-router-dom"
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import { Logout } from './Logout';

const Navbar = () => {
  return (
    <>
    <AppBar>
     <Toolbar>
         <Typography variant="h4" sx={{flexGrow:1}}>CANTEEN MANAGEMENT SYSTEM</Typography>
         
         <Button  color="success" variant="contained" to="/signup" component={Link}>Signup</Button>
         <Button  color="success" variant="contained" to="/home" component={Link}>Home</Button>
         <Button  color="success" variant="contained" to="/Login" component={Link}>Login</Button>
         <Button  color="success" variant="contained" to="/" component={Link}>Admin</Button>
         <Logout/>
        
         
     </Toolbar>
    </AppBar>
 </>  
  )
}

export default Navbar