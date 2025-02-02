import { FormControlLabel,Radio,FormControl, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import VehicleDetailsCard from './VehicleDetailsCard';
import {luxuryVehicles} from '../Home/luxuryVehicles'



const vehicleTypes = [
  { label: "All", value: "All" },
  { label: "Luxury", value: "LUXURY" },
  { label: "Car", value: "CAR" },
  { label: "Bike", value: "BIKE" },
  { label: "Scooty", value: "SCOOTY" },
  { label: "Truck", value: "TRUCK" },
  { label: "Bus", value: "BUS" },
  { label: "Van", value: "VAN" },
];


const VehiclePage = () => {
  const [vehicleType,setVehicleType]=useState("All");
  const handleFilter=(e)=>{
    console.log(e.target.value,e.target.name);
    setVehicleType(e.target.value)
  }
  return (
    <div className='px-5 lg:px-20'>

      <section className='pt-[2rem] lg:flex relative'>

        <div className='space-y-10 lg:w-[20%] filter'>
          <div className='box space-y-5 lg:sticky top-28'>
            <div>
              <Typography variant='h5' sx={{paddingBottom:"1rem"}}>Vehicle Type</Typography>
              <FormControl className='py-10 space-y-5' component={"fieldset"}>
                <RadioGroup onChange={handleFilter} name='Vehicle_Type' value={vehicleType}>
                  {vehicleTypes.map((item)=>    <FormControlLabel key={item.value} value={item.label} control={<Radio />} label={item.value} />
)}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className='space-y-5 lg:w-[80%] filter lg:pl-10'>
          {luxuryVehicles.map((item) => (
            <VehicleDetailsCard key={item.id} vehicle={item} />
          ))}
        </div>       
      </section>
    </div>
  )
}

export default VehiclePage