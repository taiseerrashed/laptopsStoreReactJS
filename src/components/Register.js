import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { errorMsg, successMsg } from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/reducers/user";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (values) => {
    if (values.password !== values.confirmPassword)
      return errorMsg("Password doesn't match !!");

    let dublicated = users.some((user) => user.email === values.email);
    if (dublicated) return errorMsg("Email is already taken");
    successMsg("Account Created");
    dispatch(addUser(values));

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box sx={{ margin: "10vh auto", width: "80%" }}>
      <Typography variant="h3" sx={{marginBottom: "10px" , textAlign: "center"}}>
        Register Now:
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required-firstName"
              label="First Name"
              type="text"
              fullWidth
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="outlined-required-lastName"
              label="Last Name"
              type="text"
              fullWidth
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required-email"
              label="Email"
              type="email"
              fullWidth
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <p>Already Have Account? <Link to='/login'>Sign in</Link></p>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required-password"
              label="Password"
              type="password"
              fullWidth
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required-confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{ display: "block", margin: "10px auto" }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
