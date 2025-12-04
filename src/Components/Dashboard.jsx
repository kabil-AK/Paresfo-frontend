import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const Navigate=useNavigate();
useEffect(() => {
    axios.get('https://paresfo-backend-1.onrender.com/auth/verify')

    .then(res=>{
        if(res.data.status){

        }else{
            Navigate('/')
        }
    })
    },[])

  return (
    <div className='container'>
      Welcome to Dashboard !!
    </div>
  );
};

export default Dashboard
