import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
  return (
   <>
   
{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to='/' className='navbar-brand'>#VANSLIFE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         <Link to='/about' className='nav-link active'>About</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link active' to='/vans'>Vans</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav> */}

<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(255, 247, 237, 1)", color: "black"}}>
      <div className="container">
        <Link className="navbar-brand" to="/">#VANSLIFE</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vans">Vans</Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
   </>
  )
}

export default NavBar