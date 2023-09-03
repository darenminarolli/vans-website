import React, { useState } from 'react'
import { NavLink, useNavigate,Form, redirect, useActionData  } from 'react-router-dom'
import { loginUser } from '../api'
import { loadConfigFromFile } from 'vite'

export async function action({request}) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  localStorage.setItem('loggedIn',true)
  return }
const Login = () => {
  const navigator=useNavigate()
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const [status,setStatus]=useState('idle')
  const [error,setError]=useState(null)
  //  localStorage.getItem('loggedIn')?navigator()
 
   
  return (
    <>
     <section className='container-fluid d-flex flex-column align-items-center justify-content-center mt-3' style={{ width:'40vw'}}>
        <hgroup style={{width:'30vw'}}>
          <h1>Log in to your account</h1>
          {error ? <h4 style={{color:'red'}}>{error.message}</h4>:
          <p>Enter the credetials to log in to your account.</p> }
      
        </hgroup>
        <Form method='post' style={{width:'30vw'}} replace>
            <label htmlFor="email">E-mail:</label><br/>
            <input type="email"  name='email' autoFocus={status=='idle'}  className='form-control' style={{width:'30vw'}} placeholder='Enter your email...'/><br />
            <label htmlFor="password" >Password:</label><br />
            <input type="password"  name='password'  className='form-control' style={{width:'30vw'}} placeholder='Enter your password...' required={true}/><br />
            <button type='submit' disabled={status==='submitting'} className='btn btn-primary' style={{width:'30vw'}}>{status==='submitting'?'Log in process... ' :'Log In'}</button>
        </Form><br />
        <p>Don't have one? <span><NavLink to='/signIn'>Create one Now</NavLink></span></p>
      </section>
    </>
  )
}

export default Login