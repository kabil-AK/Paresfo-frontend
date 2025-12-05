import{useNavigate,useParams} from 'react-router-dom';
import "../App.css";
import Axios from 'axios';
import React,{ useState } from 'react';


const ResetPassword = () => {
    
    const[password,setPassword]=useState('')
    const {token}=useParams();

const navigate=useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();
        Axios.post('https://paresfo-backend-1.onrender.com/auth/reset-password/'+token,{
    password,}).then((response)=>{
        if(response.data.status){
            navigate('/login')  
        }
        console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='container'>
        <form className='sign-up-form ' onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      
      
      <label htmlFor="password"> New Password:</label>
        <input 
       
        type="password" 
        placeholder='*******' 
        onChange={(e)=>setPassword
        (e.target.value)} />
        <button type='password'>Send</button>
        
      </form>
    </div>
  )
}

export default ResetPassword
