import React from 'react'
import BookingsCard from './BookingsCard'

const Bookings = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-xl text-center py-7 font-semibold'>My bookings</h1>

      <div className='space-y-5 w-full lg:w-1/2'>
      {
        [1,1,1,1].map((item)=><BookingsCard />)
      }
      </div>

    </div>
  )
}

export default Bookings