import React from 'react'

const Login = () => {
    const [loginFormData,setLoginFormData]=React.useState({email:'',password:''})
    function handleSubmit(e){
      e.preventDefault()

    }
    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <>
      <section className='container-fluid d-flex flex-column align-items-center justify-content-center mt-3' style={{ width:'40vw'}}>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit} style={{width:'30vw'}}>
            <label htmlFor="email">E-mail:</label><br/>
            <input type="email" onChange={handleChange} name='email' id='email' className='form-control' style={{width:'30vw'}} placeholder='Enter your email...'/><br />
            <label htmlFor="password" >Password:</label><br />
            <input type="password" onChange={handleChange} name='password' className='form-control' id='password' style={{width:'30vw'}} placeholder='Enter your password...'/><br />
            <button type='submit' className='btn btn-primary' style={{width:'30vw'}}>Log In</button>
        </form>
      </section>
    </>
  )
}

export default Login