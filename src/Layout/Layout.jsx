import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/><br/>
    <Footer/>
  
    </>
  )
}

export default Layout