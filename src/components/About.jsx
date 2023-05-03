import React from 'react'
import coverImage1 from '../assets/image55.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
   <>
   <div style={{height:'100vh'}} className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={coverImage1} className="img-fluid rounded" alt="About Us" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 style={{fontWeight:'bolder'}}>About Us</h1>
          <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
          <p className='text-break'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)

Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          <h2 className="mt-4 mb-3">Your Destination is Waiting. Your Van is Ready.</h2>
          <form>
            
            {/* <button type="button" className="btn btn-primary">Explore vans</button> */}
          <Link to='/vans' className='btn btn-primary '>Explore vans</Link>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default About