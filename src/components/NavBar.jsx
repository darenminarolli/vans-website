import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " >
      <div className="container">
        <Link className="navbar-brand" to="/">#VANSLIFE</Link>
        
        <div className="justify-content-end" id="navbarNav">
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
  );
}

export default Navbar;