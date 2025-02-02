import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile'
import Bookings from './Bookings'
import Notifications from './Notifications'

const Profile = () => {
  const [openSidebar,setOpenSidebar]=useState(false);
  return (
    <div className='lg:flex justify-between'>

      <div className='sticky h-[80vh] lg:w-[20%]'>
        <ProfileNavigation open={openSidebar}/>
      </div>
      <div className='lg:w-[80%]'>
        <Routes>
          <Route path='/' element={<UserProfile/>}></Route>
          <Route path='/bookings' element={<Bookings/>}></Route>
          <Route path='/notifications' element={<Notifications/>}></Route>
        </Routes>
      </div>
      
    </div>
  )
}

export default Profile