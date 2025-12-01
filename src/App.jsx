import React from "react";
import Signup from "./Components/Signup.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import ForgotPassword from "./Components/ForgotPassword.jsx";
import ResetPassword from "./Components/ResetPassword.jsx";
import Dashboard from "./Components/Dashboard.jsx";

export default function App() {
  

  return (
  
      <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
     <Route path="/forgotPassword" element={<ForgotPassword/>}/>
     <Route path="/reset-password/:token" element={<ResetPassword/>}/>
     <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    
   
  )
}


