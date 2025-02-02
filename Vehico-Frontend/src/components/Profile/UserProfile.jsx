import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getCustomerData } from '../config/api';

const UserProfile = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();
  
  const handleLogout = ()=>{

    localStorage.removeItem('token')
    navigate("/account/login")
  }


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await getCustomerData(token); // Await API response
          console.log(response.data);
          setUserData(response.data);
        } else {
          throw new Error('No token found. Please log in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        setError('Failed to fetch user data. Please log in again.');
        localStorage.removeItem('token'); // Remove invalid token
        navigate('/account/login'); // Redirect to login page
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUserData();
  }, [navigate]);


  if (loading) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }


  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>

      <div className='flex flex-col items-center justify-center '>
        <AccountCircleIcon sx={{fontSize:"9rem"}}/>
        <h1 className='py-5 text-2xl font-semibold'>{userData?.name || 'DemoName'}</h1>
        <p>{userData?.email || 'example@example.com'}</p>
        <Button onClick={handleLogout} variant='contained' sx={{margin:"2rem 0rem"}}>Logout</Button>
      </div>
      
    </div>
  )
}

export default UserProfile