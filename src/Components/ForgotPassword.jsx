import{useNavigate} from 'react-router-dom';
import "../App.css";
import Axios from 'axios';
import React,{ useState } from 'react';


const ForgotPassword = () => {
    
    const[email,setEmail]=useState('')
    const navigate=useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        Axios.post('https://paresfo-backend-1.onrender.com/auth/forgot-password',
          {email},{ withCredentials: true })
          .then((response)=>{
        if (response.data.status) {
        alert(response.data.message);  // show backend message
        navigate('/login');
      } else {
        alert(response.data.message || "Something went wrong");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Error sending reset link");
    });
  };
  return (
    <div className='container'>
        <form className='sign-up-form ' onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      
      
      <label htmlFor="email">Email:</label>
      <input 
      id='email'
      type="email" 
      autoComplete='off' 
      placeholder='Email'onChange={(e)=>setEmail(e.target.value)}
      required />

      <button type='submit'>Send</button>
        
      </form>
    </div>
  )
}

export default ForgotPassword
