import React, {useState, useContext} from 'react'
import BookingContext from '../context/Bookingcontext';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import car1 from "../assets/car1.png.jpg"
import car2 from "../assets/car2.png.jpg"
import car3 from "../assets/car3.png.jpg"

const Home = () => {
  const token = localStorage.getItem("token");
  const [value, setValue] = useState({car:"",contact:"", from:"", to:"",time:""});
  const context = useContext(BookingContext);
  const navigate = useNavigate();
    
    const {createBooking} = context;
 const handleOnChange = (e)=>{
  setValue({...value, [e.target.name]:e.target.value})
 }

 const handleSubmit = (e)=>{
     e.preventDefault();
    if(!token){
      alert("you have to login first then create data");
    }
    createBooking(value.car,value.contact, value.from,  value.to, value.time);
    navigate("/userbooking");
 }
  return (
    <>
    <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={car1} class="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Priority on Safety</h5>
        <p> We are committed to providing you with a secure and reliable transportation experience.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={car2} class="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Stringent Sanitization Measures</h5>
        <p>Our team follows strict protocols to sanitize and disinfect our vehicles regularly, ensuring a clean and healthy environment for our passengers.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={car3} class="d-block w-100" alt=""/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Expertly Trained Drivers</h5>
        <p> your safety is in good hands with our expertly trained drivers.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <div className='home'>
      <h1>You can book a car.</h1>
      <h1> If you need safe transport</h1>
    <div className='container'>
      <form onSubmit={handleSubmit} >
      <div className="mb-3">
    <label htmlFor="car" className="form-label ">Car</label>
    <input type="text" placeholder='Enter car name' name="car" value={value.car} onChange={handleOnChange} className="form-control" id="car" aria-describedby="emailHelp" required/>
    
  </div>
      <div className="mb-3">
    <label htmlFor="contact" className="form-label">Contact</label>
    <input type="number" placeholder='Enter phone number' name="contact" value={value.contact} onChange={handleOnChange} className="form-control" id="contact" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="from" className="form-label">From</label>
    <input type="text" placeholder='pick up from' name="from" value={value.from} onChange={handleOnChange} className="form-control" id="from" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="to" className="form-label">To</label>
    <input type="text"  placeholder='drop at'name="to" value={value.to} onChange={handleOnChange} className="form-control" id="to" aria-describedby="emailHelp" required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="time" className="form-label">Time</label>
    <input type="text" placeholder='Enter time' name="time" value={value.time} onChange={handleOnChange} className="form-control" id="time" required/>
  </div>
 
  <button type="submit" className="btn btn-primary">Book a car</button>
</form>
    </div>
    </div>
    </>
  )
}

export default Home
