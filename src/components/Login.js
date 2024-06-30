
import React, { useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom";
import AuthContext from '../context/Authcontext';
import "./Login.css"
const Login = () => {
    const [value, setValue] = useState({ email:"", password:""});
    const context = useContext(AuthContext);
    const {login} = context;
    
    const navigate = useNavigate();

    const handleOnChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value});
      }

    const handleSubmit = async(e)=>{
        e.preventDefault();
       login(value.email, value.password);
       navigate("/");
      
       
     }
     
  
      
  return (
    <div className='login'>
    <div className='container'>
      <h1>Login using your credential</h1>
         <form onSubmit={handleSubmit}>
      
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email" value={value.email} onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" value={value.password} onChange={handleOnChange} className="form-control" id="exampleInputPassword1" required/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <div className='bottom'>
  <p>Don't have an Account : </p>
  <Link to="/signup" className='text-blue'>Signup</Link>
  </div> 
</form>
    </div>
    </div>
  )
}

export default Login
