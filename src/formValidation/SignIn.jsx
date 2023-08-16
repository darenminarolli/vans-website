import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigator=useNavigate()
  const[isValid,isValidSet]=useState(true)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
console.log(formData)
  const handleChange = (e) => {
    const {name, value}=e.target;
    setFormData((prevData)=>({...prevData,[name]:value}))
    
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.clear();
    localStorage.setItem('email', formData.email);
    localStorage.setItem('password', formData.password);
    isValid? navigator('/signInSuccess'): '';
  }
 const styles={
  color: 'black',
  border: '1px solid rgba(255, 204, 199, 1)',
  borderRadius:'3px',
  width:'50%',
  marginLeft: '25%',
  marginTop:'10px',
  padding:'3px',
  backgroundColor: 'rgba(255, 241, 240, 1)',
 }
  return (
<div className="container mb-5 mt-3">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            Sign In
          </div>
         {!isValid?  <div className='card-text'>
            <button type='button' style={styles}>The 2 passwords do not match</button>
          </div>: ''}
          <div className="card-body">
            <form method='post' onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" onChange={handleChange} className="form-control" id="fullName" name="fullName" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" onChange={handleChange} className="form-control" id="email" name="email" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="password" name="password" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="confirmPassword" name="confirmPassword" required/>
              </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
 );
};

export default SignIn;
