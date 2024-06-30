import React, { useState } from "react";
import BookingContext from "./Bookingcontext";
const BookingState = ({children})=>{
  const initialState = [];
  const [booking, setBooking] = useState(initialState);
 
  const getBookingData = async()=>{
    const response = await fetch("http://localhost:8000/api/booking/getspecificuserdata", {
      method:"GET",
      headers:{
        "auth-token" : localStorage.getItem("token")
      }
    })
    const data =await response.json();
    setBooking(data);
  }
  
  const createBooking =async(car, contact,from,to,time)=>{
    const response = await fetch("http://localhost:8000/api/booking/adddata",
    {
   method:"POST",
   headers:{
    "content-type":"Application/json",
    "auth-token":localStorage.getItem("token")
   },
   body:JSON.stringify({car:car, contact:contact, from:from,to:to,time:time})
    }
  )
  const data = await response.json;
  console.log(data);
  

  }

  const updateBooking = async(id,car,contact,from,to,time)=>{
     await fetch(`http://localhost:8000/api/booking/updatedata/${id}`,
    {
   method:"PUT",
   headers:{
    "content-type":"Application/json",
    "auth-token":localStorage.getItem("token")
   },
   body:JSON.stringify({car:car, contact:contact, from:from,to:to,time:time})
    }
  )
  }

  const deleteBooking = async(id)=>{
      await fetch(`http://localhost:8000/api/booking/deletedata/${id}`,
    {
   method:"DELETE",
   headers:{
    "content-type":"Application/json",
    "auth-token":localStorage.getItem("token")
   },
    }
  )
  }

  return (
    <BookingContext.Provider value = {{booking, getBookingData, createBooking, updateBooking, deleteBooking}}>
    {children}
    </BookingContext.Provider>
  )

}

export default BookingState;