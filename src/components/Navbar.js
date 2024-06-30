import React, {  useState, useContext } from 'react'
import {Link, useNavigate  } from "react-router-dom"
import AuthContext from '../context/Authcontext';
import "./Navbar.css";
const Navbar = () => {
    const [token , setToken] = useState(localStorage.getItem("token"))
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const {user, setUser} = context;
    const logout=()=>{
      setUser(null);
      setToken(localStorage.removeItem("token"));
      navigate("/login");
       
     
    }
    

    

   
  return (
    <>
      <nav className="navbar navbar-expand-lg mar">
  <div className="container-fluid top">
    <Link className="navbar-brand text-white "  to="/">Booking cars</Link>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link active text-white mr-2"  aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/userbooking">My Trips</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
     {user && user.isAdmin ? <li className="nav-item">
          <Link className="nav-link text-white" to="/admin" >Admin</Link>
        </li>:""}
        
         </ul> 
         <div className='d-flex justify-content-end'>

     {token || user ?   <button className='btn btn-primary' onClick={logout}>Logout</button>
       : <>
       <Link to = "/signup" className='mx-1' ><button className='btn btn-primary  color-white'>Signup</button></Link>
        
        
        <Link to = "/login" className='mx-1' ><button className='btn btn-primary  color-white'>Login</button></Link>
        </>
      }
       
        </div>
     
    </div>
   
  </div>
</nav>
    </>
  )
}

export default Navbar
