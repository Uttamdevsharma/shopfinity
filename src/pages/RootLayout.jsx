import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const RootLayout = () => {
  return (
   <>

     <div className="sidebar">
      <Nav />
   </div>
   
   
   <div className="detail">
    <Outlet/>
   </div>

 
   
   </>
  )
}

export default RootLayout