import { Button, Card, Chip } from '@mui/material'
import React from 'react'

const AdminVehicleCard = ({image,name,description,price}) => {
  return (
    <Card className='m-5 w-[18rem] h-[20rem]'>
      <div className={`${true?'cursor-pointer':'cursor-not-allowed'} relative`}>
        <img className='w-full h-[12rem] rounded-t-md object-cover' src={image} alt="" />
        <Chip  size='small' className='absolute top-2 left-2 *: ' color={true?"success":"error"} label={true?"Available":"Not Aavilable"}/>
      </div>
      <div className='p-3 textPart lg:flex w-full justify-between'> 

        <div className='space-y-1'>
          <p className='font-semibold text-lg'>{name}</p>
          <p className='text-gray-500 text-sm'>{description}</p>
        </div>
        <div className='flex justify-between flex-wrap'>
         <span>₹{price}</span>
        <Button variant='contained' sx={{height:"2rem"}}>Edit</Button>
        </div>
      </div>
    </Card>
  )
}

export default AdminVehicleCard