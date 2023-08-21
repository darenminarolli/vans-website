import React, { useState } from 'react'
import { NavLink, useNavigate,  } from 'react-router-dom'

const Login = () => {
  const navigator=useNavigate()
    const [loginFormData,setLoginFormData]=React.useState({email:'',password:''})
    const [isValid,isValidSet]=useState(true)
    function handleSubmit(e){
      e.preventDefault()
       let emailValidtation=localStorage.getItem('email');
       let pswValidation=localStorage.getItem('password');
       if(emailValidtation==loginFormData.email && pswValidation==loginFormData.password){
        (navigator('/host'))
       }else{
        isValidSet(false)
       }
    }
    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const styles={
      color: 'black',
      border: '1px solid rgba(255, 204, 199, 1)',
      borderRadius:'3px',
      width:'100%',
      marginBottom: '10px',
      padding:'3px',
      backgroundColor: 'rgba(255, 241, 240, 1)',
    }
   
  return (
    <>
     <section className='container-fluid d-flex flex-column align-items-center justify-content-center mt-3' style={{ width:'40vw'}}>
        <hgroup>
        <h1>Log in to your account</h1>
        {isValid?<p>Enter the credetials to log in to your account.</p>
        : <button type="button"style={styles}>The credentials are incorrect</button>
        }
        </hgroup>
        <form onSubmit={handleSubmit} style={{width:'30vw'}}>
            <label htmlFor="email">E-mail:</label><br/>
            <input type="email" onChange={handleChange} name='email' id='email' className='form-control' style={{width:'30vw'}} placeholder='Enter your email...'/><br />
            <label htmlFor="password" >Password:</label><br />
            <input type="password" onChange={handleChange} name='password' className='form-control' id='password' style={{width:'30vw'}} placeholder='Enter your password...' required={true}/><br />
            <button type='submit' className='btn btn-primary' style={{width:'30vw'}}>Log In</button>
        </form><br />
        <p>Don't have one? <span><NavLink to='/signin'>Create one Now</NavLink></span></p>
      </section>
    </>
  )
}

export default Login