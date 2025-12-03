import React,{useEffect,useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate=useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  axios.defaults.withCredentials = true;

  // Check login status on page load
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
      .then(res => {
        if (res.data.status) {
          localStorage.removeItem("isLoggedIn"); // remove login status
          setIsLoggedIn(false);
          navigate('/login');
        }
      })
      .catch(err => 
        console.log(err)
      );
  };
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 border-2 rounded-lg shadow-lg'> 
      <h1 className='text-4xl md:text-5xl font-extrabold text-green-600 mb-6'><Link to="/dashboard"   className="hover:text-green-800 transition-colors">PARESFOO</Link></h1>
      <br />
      <div className="mb-6">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
      <br />
      <br />
      <div className='max-w-xl text-center'>
      <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Welcome Back to Reset - Refresh and continue securely!</h1>
            <p className="text-gray-700 bg-green-100 rounded-xl p-6 text-lg shadow">
              “Oops! Forgot your password?
Let’s get you a new one and back on track in no time.”
            </p>
            </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Paresfo. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
