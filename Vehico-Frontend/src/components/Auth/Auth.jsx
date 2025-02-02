import React from 'react'
import { Box, Modal } from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom'
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

 export const style = {
  position:"absolute",
  top:"50%",
  left:"50%",
  transform : "translate(-50%,-50%)",
  width:"400px",
  bgcolor:"background.paper",
  outline:"none",
  boxShadow:24,
  p:4,
}
const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClose=()=>{
    navigate('/')
  }
  return (
    <>

    <Modal onClose={handleOnClose} open={location.pathname==='/account/register'|| location.pathname==='/account/login'}>

    <Box sx={style}>
      {location.pathname==='/account/register'?<RegisterForm />:<LoginForm />}
    </Box>

    </Modal>

    </>
  )
}

export default Auth