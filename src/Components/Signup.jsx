import React, { useState } from 'react';
import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import axios from "axios";

export const Signup = () => {
    const heading={fontSize:"1.5rem",fontWeight:"600"};
    const paperStyle={padding:"6rem", borderRadius:"1rem",marginTop:"10"}
    const row={display:"flex", marginTop:"1.5rem"}
    const btnStyle={marginTop:"1.5rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"}
    
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSignup=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/signup",{name,email,password})
        .then(result=>{
      if(result status == 201)

        })
        
    }

    return (
    <>
        <Grid align="center">
            <Paper style={paperStyle} sx={{width:{
                xs:"80vw",
                sm:"50vw",
                md:"40vw",
                lg:"30vw",
                xl:"20vw"
                
            },
            height:'100vh'}}>
                <Typography style={heading}>Signup</Typography>
             <form onSubmit={handleSignup}>
                <TextField onChange={(e)=>setName(e.target.value)}name="Username" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="Username" type="text"></TextField>
                <TextField onChange={(e)=>setEmail(e.target.value)}name="Password" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="Password" type="password"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)}name="E-mail" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="E-mail" type="password"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)}name="Phone number" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="Phone number" type="text"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)}name="Class" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="Class" type="text"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)}name="College" required sx={{label: {fontWeight: '700', fontSize:"1.3rem"}}} style={row} label="College" type="text"></TextField>
                <Button type="Submit" variant="contained" style={btnStyle}>Signup</Button>
             </form>
            </Paper>

        </Grid>
    </>
  )
}
