import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Home.css"
import BookingContext from '../context/Bookingcontext'
const UpdateBooking = () => {
  const context = useContext(BookingContext);
  const {booking, updateBooking} = context;
  const {id} = useParams();
  const filterBooking = booking.filter((booked)=>booked._id===id)
  const [value , setValue] = useState(filterBooking);
  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    setValue([{...value, [e.target.name]:e.target.value}])
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    updateBooking(id,value[0].car,value[0].contact,value[0].from,value[0].to,value[0].time);
    navigate("/userbooking");
  }
 
  console.log(filterBooking);
  return (
    <div className='home'>
    <h1>You can book a car. If you need transport</h1>
  <div className='container'>
    <form onSubmit={handleSubmit} >
    <div className="mb-3">
  <label htmlFor="car" className="form-label ">Car</label>
  <input type="text" value={value[0].car} onChange={handleOnChange} placeholder='Enter car name' name="car"  className="form-control" id="car" aria-describedby="emailHelp" required/>
  
</div>
    <div className="mb-3">
  <label htmlFor="contact" className="form-label">Contact</label>
  <input type="number" value={value[0].contact} onChange={handleOnChange} placeholder='Enter phone number' name="contact"  className="form-control" id="contact" aria-describedby="emailHelp" required/>
  
</div>
<div className="mb-3">
  <label htmlFor="from" className="form-label">From</label>
  <input type="text" value={value[0].from} onChange={handleOnChange} placeholder='pick up from' name="from"  className="form-control" id="from" aria-describedby="emailHelp" required/>
  
</div>
<div className="mb-3">
  <label htmlFor="to" className="form-label">To</label>
  <input type="text" value={value[0].to} onChange={handleOnChange} placeholder='drop at'name="to"  className="form-control" id="to" aria-describedby="emailHelp" required/>
  
</div>
<div className="mb-3">
  <label htmlFor="time" className="form-label">Time</label>
  <input type="text" value={value[0].time} onChange={handleOnChange} placeholder='Enter time' name="time"  className="form-control" id="time" required/>
</div>

<button type="submit" className="btn btn-primary">Book a car</button>
</form>
  </div>
  </div>
  )
}

export default UpdateBooking
