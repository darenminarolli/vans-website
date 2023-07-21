import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
const Footer = () => {
  return (
    <>
 

   <footer className="footer  p-4 bg-dark py-3 fixed-bottom">
    <div className="container text-center">
      <span className="text-muted">&copy 2022 <Link style={{textDecoration:'none', color:'grey'}} to='/'>#VANSLIFE </Link></span>
    </div>
  </footer>  
    </>
  )
}

export default Footer