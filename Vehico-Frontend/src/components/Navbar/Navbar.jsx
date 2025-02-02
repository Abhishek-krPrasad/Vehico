import { Avatar, IconButton } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import CarRentalIcon from '@mui/icons-material/CarRental';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Person from '@mui/icons-material/Person';

import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

  const navigate=useNavigate();

  const handleProfileClick =()=>{

    const isLoggedIn = localStorage.getItem('token')!==null;

    if(isLoggedIn){
      navigate("/my-profile"); // If logged in, navigate to profile
    }else{
      navigate("/account/login"); // If not logged in, navigate to login
    }
  };

  return (
    <div className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#219ebc] lg:px-20 flex justify-between'>

      <div className='flex items-center space-x-4'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>

          <li onClick={()=>{navigate("/")}} className='logo font-semibold text-gray-300 text-2xl'>Vehico</li>

        </div>
      </div>
        <div className='flex items-center space-x-2 lg:space-x-10'>

            <div className=''>
              <IconButton>
                <SearchIcon sx={{fontSize:"1.5rem"}}/>
              </IconButton>
            </div>
            <div className=''>
              <IconButton onClick={()=>navigate("/vehicles")}>
            <CarRentalIcon sx={{fontSize:"2rem"}}/>
              </IconButton>
            </div>
            <div className=''>
                { false?<Avatar sx={{bgcolor:"white",color:"#219ebc"}}/>:<IconButton onClick={handleProfileClick}><Person sx={{fontSize:"2rem"}}/></IconButton>}
            </div>
            <div className=''>
            <IconButton onClick={()=>navigate("/about")}>
                <InfoIcon sx={{fontSize:"2rem",borderRadius:"50%",bgcolor:"white",color:"#219ebc"}}/>
              </IconButton>
            </div>
        </div>



    </div>
  )
}
