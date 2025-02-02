import { Button, Card } from '@mui/material'
import React from 'react'

const BookingsCard = () => {
  return (
    <div className=''>
      <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>

          <img className='h-16 w-16 ' src="https://www.cnet.com/a/img/resize/c051ef68c16420fb72eb851726b5cb6bf324f2e0/hub/2022/07/29/f90d4a0d-9b78-4566-b194-d13d1047e80f/2022-porsche-911-gt3-r-02.jpg?auto=webp&fit=crop&height=675&width=1200" alt="" />

          <div>
            <p>Porsche 911 gt3</p>
            <p>₹15000</p>
          </div>

        </div>
        <div>
          <Button  className='cursor-not-allowed'>Completed</Button>
        </div>

      </Card>
    </div>
  )
}

export default BookingsCard