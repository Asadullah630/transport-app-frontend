
import React, { useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom";
import AuthContext from '../context/Authcontext';
import "./Signup.css"
const Signup = () => {
    const [value, setValue] = useState({name:"", email:"", password:""});
    const context = useContext(AuthContext);
    const {register} = context;
    const navigate = useNavigate();
    const handleOnChange = (e)=>{
      setValue({...value, [e.target.name]: e.target.value});
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
     register(value.name, value.email, value.password);
     navigate("/");
   
      
    }
  return (
    <div className="signup"  >
      <div className='container'>
        <h1>Create your Account</h1>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" name="name" value={value.name} onChange={handleOnChange} className="form-control" id="name" aria-describedby="emailHelp" required/>
    
  </div>
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
  <p>Already have an account : </p>
  <Link to="/login" className='text-blue'>Login</Link>
  </div> 
</form>
</div>
    </div>
  )
}

export default Signup
