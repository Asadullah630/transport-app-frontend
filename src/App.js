import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import UserBooking from './components/UserBooking';
import Signup from './components/Signup';
import Login from "./components/Login";
import UpdateBooking from './components/UpdateBooking';
import Admin from "./components/Admin.Layout";
import AboutPage from './components/AboutPage';
const App = () => {

  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route exact path='/' element = {<Home/>}/>
    <Route path = "/userbooking"  element = {<UserBooking/>} />
    <Route path = "/signup"  element = {<Signup/>} />
    <Route path = "/login"  element = {<Login/>} />
    <Route path="/update/:id"  element = {<UpdateBooking/>}/>
    <Route path = "/about" element ={<AboutPage/>}/>
    <Route path= "/admin" element = {<Admin/>}/>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
