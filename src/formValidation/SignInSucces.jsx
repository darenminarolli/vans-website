import React from 'react'
import { NavLink } from 'react-router-dom'
import SuccessImg from '../assets/Screenshot (7).png'

const SignInSucces = () => {
  return (
    <>
    <section className='container-fluid d-flex flex-column align-items-center justify-content-center mt-3' style={{ width:'40vw'}}>
        <hgroup>    
        <h1>Success!</h1><br />
        <p>You have succesfully created an account,<br />
           go to login in now...
        </p>
        <img src={SuccessImg} alt="" className='img-fluid' style={{width:'100%',}} />
        </hgroup>
         <button type='button' style={{width:'100%'}} className='btn btn-primary'><NavLink className='nav-link' to='/login'>Go to login</NavLink></button>
    </section>
    </>
  )
}

export default SignInSucces