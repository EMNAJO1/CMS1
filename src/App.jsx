import { useState } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { Signup } from './Components/Signup';
import Log from './Components/AdminPan/Log';





const App = () => {
 return (
    
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path={'/AdminPan'} element={<Log/>}/>
     
  

    </Routes>
    </>
  )
}

export default App
