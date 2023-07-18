
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../App.css'
const HostLayout = () => {

  return (
    <>
    
<ul className='nav'>
    <li className='nav-item'>
        <Link className='nav-link links' to='/host'>DashBoard</Link>
    </li>
    <li className='nav-item'>
        <Link className='nav-link links' to='/host/income'>Income</Link>
    </li>
    <li className='nav-item'>
        <Link to='/host/vans' className='nav-link links'>Vans </Link>
    </li>
    <li className='nav-item'>
        <Link  className='nav-link links' to='/host/review'>Reviews</Link>
    </li>
</ul>
    <Outlet/>
    </>
  )
}

export default HostLayout