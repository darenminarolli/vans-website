import { Link, NavLink} from 'react-router-dom';
import '../../src/App.css'
import {BiUserCircle} from 'react-icons/bi'
function Navbar() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <nav className="navbar navbar-expand-lg navbar-light " >
      <div className="container">
        <NavLink className="navbar-brand" to="/">#VANSLIFE</NavLink>
        
        <div className="justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className='nav-item'>
            <NavLink className='nav-link' to='/host'>Host</NavLink>

            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vans">Vans</NavLink>
            </li>
            <li className='nav-item'>
               <NavLink className='nav-link' to='/login'><BiUserCircle/></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;