import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const Navigate=useNavigate();
useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')

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
