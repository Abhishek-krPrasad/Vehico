import { TextField, Typography, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getbooking, loginServices } from "../config/api";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    // .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleloginSubmit = async (values) => {
    try {
      const res = await loginServices(values);
      if (res?.status == 200) {
        localStorage.setItem("token",res?.data?.jwt)
        localStorage.setItem("role",res?.data?.role)
        // const book = await getbooking(res?.data?.jwt)
        // console.log("this is booked", book)
        if (res?.data?.role == "ADMIN") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <Typography variant="h5" className="text-center" sx={{ mb: 2 }}>
        Login
      </Typography>

      <Formik
        initialValues={loginForm}
        validationSchema={validationSchema}
        onSubmit={handleloginSubmit}
      >
        {() => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              // values={Formik.values.email}/
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", marginBottom: "1rem" }}
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
              style={{ color: "red", marginBottom: "1rem" }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, p: 2 }}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an Account
        <Button
          onClick={() => {
            navigate("/account/register");
          }}
          size="small"
        >
          Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
