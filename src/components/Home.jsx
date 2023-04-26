import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import BgImage from '../assets/image54.png'
const Home = () => {
  return (
   
    <>  
   <div className="bg-image pt-5" style={{backgroundImage: `url(${BgImage})`, height:'70vh'}}>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="text-white">You got the travel plans,<br /> we got the travel vans.</h1>
        <p className="lead text-white">Add adventure to your life by joining the #vanlife movement. <br />
          Rent the perfect van to make your perfect road trip.</p>
        <Link to='/vans' className='btn btn-primary'>Find your van</Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home