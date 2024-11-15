import { Button } from '@mui/material'
import React from 'react'

export const Logout = () => {
    const button={marginRight:'10px', fontSize:'1rem', fontWeight:'700', padding:'0.3rem 1rem'}
  return (
    <Button style={button} variant="contained" color="error">Logout</Button>
  )
}
