import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import BgImage from '../assets/image54.png'
const Home = () => {
  return (
   
    <>
    {/* <div className="container-fluid bg-image p-5" style={{backgroundImage:`url(${BgImage})`}}>
   <h1 className='text text-break'>You got the travel plans,<br /> we got the travel vans.</h1>
   
   <p className='sec-text text-break'>Add adventure to your life by joining the #vanlife movement. <br />
    Rent the perfect van to make your perfect road trip.</p>


<div className="d-grid col-5 gap-2">
    <button className='btn btn-primary mb-3' type='button'>Find your van</button>
</div>
    </div> */}
    
    <div className="bg-image w-5 pt-5" style={{backgroundImage: `url(${BgImage})`}}>
      <div className="container py-5">
        <h1 className="text-white">You got the travel plans,<br /> we got the travel vans.</h1>
        <p className="lead text-white">Add adventure to your life by joining the #vanlife movement. <br />
    Rent the perfect van to make your perfect road trip.</p>
        {/* <button className="btn btn-primary" type='button'>Find your van</button> */}
        <Link to='/vans' className='btn btn-primary'>Find your van</Link>
      </div>
    </div>
    </>
  )
}

export default Home