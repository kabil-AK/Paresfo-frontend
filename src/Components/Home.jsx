import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate=useNavigate();
  axios.defaults.withCredentials=true;
  const handleLogout=()=>{
    axios.get('http://localhost:3000/auth/logout')
    .then(res=>{
        if(res.data.status){
          navigate('/login')
        }
    }).catch(err=>{
        console.log(err)
    })
  }
  return (
    <div>
      <button className='dash '><Link to="/dashboard">PARESFOO</Link></button>
      <br />
      <button className='btn-h' onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <h1 className="text-3xl font-bold text-green-500 rounded-6xl w-1 ">Welcome Back to Reset - Refresh and continue securely!</h1>
            <p className="text-gray-600 m-6 rounded-xl p-4 bg-green-100">
              “Oops! Forgot your password?
Let’s get you a new one and back on track in no time.”
            </p>

      <footer className="footer">
        © {new Date().getFullYear()} Paresfo. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
