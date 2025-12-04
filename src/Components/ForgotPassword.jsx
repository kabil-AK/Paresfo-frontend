import{useNavigate} from 'react-router-dom';
import "../App.css";
import Axios from 'axios';
import React,{ useState } from 'react';


const ForgotPassword = () => {
    
    const[email,setEmail]=useState('')
    

const navigate=useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        Axios.post('https://paresfo-backend-1.onrender.com/auth/forgot-password',{
    email,}).then((response)=>{
        if(response.data.status){
            alert("check Password reset link sent to your email");
            navigate('/login')  
        }
        
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='container'>
        <form className='sign-up-form ' onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      
      
      <label htmlFor="email">Email:</label>
      <input type="email" autoComplete='off' placeholder='Email'onChange={(e)=>setEmail(e.target.value)} />

        

        <button type='password'>Send</button>
        
      </form>
    </div>
  )
}

export default ForgotPassword
