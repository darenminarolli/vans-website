import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
 <div class="container">
  <div class="row justify-content-center align-items-center" style={{height:'80vh'}}>
    <div class="col-sm-8 col-md-6">
      <div class="text-center">
        <h1>Sorry, the page you are looking for is not found</h1>
        <Link to="/" class="btn btn-primary mt-3">Return to Home</Link>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default NotFound