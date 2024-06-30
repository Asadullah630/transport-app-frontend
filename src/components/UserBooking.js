import React, {useContext, useEffect} from 'react'
import BookingContext from '../context/Bookingcontext'
import {Link} from "react-router-dom";
import "./UserBooking.css";
const UserNotes = () => {
    const context = useContext(BookingContext);
    const {booking, getBookingData, deleteBooking} = context;
    useEffect(()=>{
        getBookingData()
    },[])

   
  return (
     <>
    <div className='bookingdata'>
      <h1 className='heading'>Your bookings.</h1>
      <h1 className='heading'>Car will arrive on time</h1>
      <div className='container bookingitem'>
      {booking.map((booked)=>{

        return <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
            <h4 className="card-title">Model:  {booked.car}</h4>
            <h4 className="card-subtitle  ">Contact:  {booked.contact}</h4>
            <h4 className="card-text">From:  {booked.from} </h4>
            <h4 className="card-text">To:  {booked.to} </h4>
            <h4 className="card-text">Time:  {booked.time} </h4>
            <Link to={`/update/${booked._id}`} className="card-link"><button className='btn btn-primary mx-1'>update</button></Link>
           <button className='btn btn-primary' onClick={()=>{
            deleteBooking(booked._id)
           window.location.reload()
           }}>delete</button>
  </div>
</div>

 })}
      </div>
      </div>
    </>
  )
}

export default UserNotes
