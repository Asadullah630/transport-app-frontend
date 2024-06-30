import React, {   useState  } from 'react'
import "./UserBooking.css";




const Admin = () => {
  const [booking, setBooking] = useState([]);
 const handleApi=async()=>{
   const response = await fetch("http://localhost:8000/api/admin/usersbookings",
   {
    method:"GET",
    headers:{
      "auth-token":localStorage.getItem("token")
    }
   } 
  )
  const data = await response.json();
  setBooking(data);
 }
 

   
  return  <>
   <div className='bookingdata'>
     <h1 className='heading'>Admin page</h1>
     <h3 className='heading'>You can see all users data</h3>
      <button className='btn btn-primary' onClick={handleApi}>All users bookings</button>
     
     <div className='container bookingitem'>
     {booking.map((booked)=>{

       return <div className="card" style={{"width": "18rem"}}>
           <div className="card-body">
           <h4 className="card-title">Model:  {booked.car}</h4>
           <h4 className="card-subtitle  ">Contact:  {booked.contact}</h4>
           <h4 className="card-text">From:  {booked.from} </h4>
           <h4 className="card-text">To:  {booked.to} </h4>
           <h4 className="card-text">Time:  {booked.time} </h4>

           </div>
           </div>  
     })}
     </div>
     </div>
     </>
}

export default Admin
