import React from 'react'
import { TextField, Typography, Button } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerServices } from '../config/api';
const initialValues = {
  fullName:'',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(6, 'Full name must be at least 6 characters')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log('Form Values:', values);
    try {
      // Await the promise to get the resolved response
      const res = await registerServices(values);
      console.log(res);
  
      // Now check the response status
      if (res?.status === 201) {
        navigate("/account/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Typography variant="h5" className="text-center" sx={{ mb: 2 }}>
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            
            <Field
              as={TextField}
              name="fullName" // Matches the key in initialValues and validationSchema
              label="Full Name"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <ErrorMessage
              name="fullName" // Matches the key in initialValues and validationSchema
              component="div"
              style={{ color: 'red', marginBottom: '1rem' }}
            />

            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: 'red', marginBottom: '1rem' }}
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: 'red', marginBottom: '1rem' }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, p:2 }}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        Already have an Account
        <Button onClick={()=>{navigate('/account/login')}} size='small'>Login</Button>
      </Typography>
    </div>
  );
};

export default RegisterForm