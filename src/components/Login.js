import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { errorMsg, successMsg } from "../components/Toast";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/reducers/user";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
    const user = users.find((ele) => ele.email === email);
    if (!user) {
      return errorMsg("Email not found !");
    }
    const validPassword = user.password === password;
    if (!validPassword) {
      return errorMsg("Invalid password !");
    }
    successMsg(`welcome ${user?.firstName} ${user?.lastName}`);

    dispatch(login(user));
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <Box sx={{ margin: "10vh auto", width: "80%" }}>
      <Typography variant="h3" sx={{marginBottom: "10px" , textAlign: "center"}}>
        Login:
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
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
          </Grid>
          <Grid item xs={12} >
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
            <p>Don't Have Account? <Link to='/register'>Sign up</Link></p>
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

export default Login;
